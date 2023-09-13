import { notification } from 'antd';
import base64url from 'base64url';
import decodeUriComponent from 'decode-uri-component';
import untildify from 'untildify';

/**
 *
 */
export const downloadCert = (certPem: string): void => {
  const uriContent = URL.createObjectURL(new Blob([certPem], { type: 'application/x-pem-file' }));
  const link = document.createElement('a');
  link.setAttribute('href', uriContent);
  link.setAttribute('download', 'cert.pem');
  const event = new MouseEvent('click');
  link.dispatchEvent(event);
};

type ConnectUrlData = { host?: string; cert?: string; macaroon?: string; proto?: string };
/**
 *  Extract host, cert and macaroon from Connect string
 *  @param  {String} connectString
 *  @return { host?: string; cert?: string; macaroon?: string }
 */
export const extractConnectUrlData = (connectString: string): ConnectUrlData | undefined => {
  try {
    const connectStr = connectString.trim();
    if (!connectStr.startsWith('tdexdconnect://')) throw new Error('Tdexd Connect URL is not valid');
    const [baseUrl, paramsString] = connectStr.split('?');
    const [, host] = baseUrl.split('://');
    const params = new URLSearchParams(paramsString);
    const { cert, macaroon, proto } = Object.fromEntries(params.entries());
    return { host, cert, macaroon, proto };
  } catch (_) {
    return undefined;
  }
};

/**
 * proto must be set
 * if cert is given and proto is set to http, we return error ⛔️
 * if cert is NOT given and proto is set to https we assume a CA signed certificate is set up
 * if cert is NOT given and proto is set to http we assume insecure connection
 * @param connectUrlData
 */
export const checkConnectUrlDataValidity = (connectUrlData: ConnectUrlData): boolean => {
  if (!connectUrlData?.proto) {
    notification.error({
      message: 'The query parameter "proto" is missing in connect url',
      key: 'The query parameter "proto" is missing in connect url',
    });
    return false;
  } else if (!connectUrlData?.host) {
    notification.error({
      message: 'Host is missing in connect url',
      key: 'Host is missing in connect url',
    });
    return false;
  } else if (connectUrlData?.cert && connectUrlData?.proto === 'http') {
    notification.error({
      message: 'Connect url has a certificate but proto set to http',
      key: 'Connect url has a certificate but proto set to http',
    });
    return false;
  } else {
    return true;
  }
};

/**
 * decode a tls certificate from a base64 encoded url string.
 * @param  {String} certString base64url encoded string to decode
 * @return {String} decoded certificate
 */
export const decodeCert = (certString: string): string => {
  const unescaped = decodeUriComponent(certString);
  if (isAbsolute(untildify(unescaped))) return unescaped;
  const cert = base64url.toBase64(unescaped);
  const prefix = '-----BEGIN CERTIFICATE-----\n';
  const postfix = '-----END CERTIFICATE-----';
  return prefix + cert.match(/.{0,64}/g)?.join('\n') + postfix;
};

/**
 * Cross platform isAbsolute path routine extracted from node JS code
 */

const CHAR_UPPERCASE_A = 65; /* A */
const CHAR_LOWERCASE_A = 97; /* a */
const CHAR_UPPERCASE_Z = 90; /* Z */
const CHAR_LOWERCASE_Z = 122; /* z */
const CHAR_FORWARD_SLASH = 47; /* / */
const CHAR_BACKWARD_SLASH = 92;
const CHAR_COLON = 58;

function isWindowsDeviceRoot(code: number) {
  return (
    (code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z) ||
    (code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z)
  );
}

function isPathSeparator(code: number) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}

function isAbsolute(path: string) {
  const len = path.length;
  if (len === 0) return false;
  const code = path.charCodeAt(0);
  return (
    isPathSeparator(code) ||
    // Possible device root
    (len > 2 &&
      isWindowsDeviceRoot(code) &&
      path.charCodeAt(1) === CHAR_COLON &&
      isPathSeparator(path.charCodeAt(2)))
  );
}

/**
 * Decode a base64Url macaroon as a hex string.
 * @param  {String} macaroonString
 * @return {String} decoded macaroon
 */
export const decodeBase64UrlMacaroon = (macaroonString: string): string => {
  const unescaped = decodeUriComponent(macaroonString);
  if (isAbsolute(untildify(unescaped))) return unescaped;
  return base64url.toBuffer(unescaped).toString('hex');
};

/**
 * Encode a hex macaroon as a base64 encoded url string.
 * @param  {String} macaroonHex
 * @return {String} Encoded macaroon
 */
export const encodeBase64UrlMacaroon = (macaroonHex: string): string => {
  const macaroonBase64 = Buffer.from(macaroonHex, 'hex').toString('base64');
  return base64url.fromBase64(macaroonBase64);
};

export const getProtoVersion = async (providerEndpoint: string, proto: string): Promise<string> => {
  try {
    let infoRequestUrl: string;
    if ((window as any).IS_PACKAGED) {
      infoRequestUrl = `${window.location.protocol}//${window.location.host}/api/v1/info`;
    } else {
      infoRequestUrl = `${proto}://${providerEndpoint}/v1/info`;
    }
    const res = await fetch(infoRequestUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ list_services: '' }),
    });
    const data = await res.json();
    const isVersion2 = data.result.listServicesResponse.service
      .map((s: any) => s.name)
      .includes('tdex.v2.WalletService');
    return isVersion2 ? 'v2' : 'v1';
  } catch (err) {
    return 'v1';
  }
};
