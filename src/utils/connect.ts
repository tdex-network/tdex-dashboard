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

/**
 *  Extract cert and macaroon from Connect string
 *  @param  {String} connectString
 *  @return { cert?: string; macaroon?: string }
 */
export const extractCertMacaroon = (connectString: string): { cert?: string; macaroon?: string } => {
  const paramsString = connectString.split('?')[1];
  const params = new URLSearchParams(paramsString);
  const { cert, macaroon } = Object.fromEntries(params.entries());
  return { cert, macaroon };
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
 * decode a binary macaroon as a base64 decoded url string.
 * @param  {String} macaroonString
 * @return {String} decoded macaroon
 */
export const decodeMacaroon = (macaroonString: string): string => {
  const unescaped = decodeUriComponent(macaroonString);
  if (isAbsolute(untildify(unescaped))) return unescaped;
  return base64url.toBuffer(unescaped).toString('hex');
};
