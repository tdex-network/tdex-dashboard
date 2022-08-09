import { useEffect, useState } from 'react';

import { useTypedSelector } from '../../app/store';
import GenericIcon from '../../assets/images/coins/generic.svg';
import { isLbtcAssetId, isLcadAssetId, isUsdtAssetId } from '../../utils';

interface CurrencyIconProps {
  assetId: string;
  size?: number;
}

export const CurrencyIcon = ({ assetId, size = 24 }: CurrencyIconProps): JSX.Element => {
  const [icon, setIcon] = useState<string | null>(null);
  const network = useTypedSelector(({ settings }) => settings.network);

  useEffect(() => {
    (async () => {
      let res: Response;
      const reader = new FileReader();
      // Display lbtc/usdt/lcad icons for all networks
      if (isLbtcAssetId(assetId, network)) {
        res = await fetch(
          `https://liquid.network/api/v1/asset/6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d/icon`
        );
      } else if (isUsdtAssetId(assetId, network)) {
        res = await fetch(
          `https://liquid.network/api/v1/asset/ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2/icon`
        );
      } else if (isLcadAssetId(assetId, network)) {
        res = await fetch(
          `https://liquid.network/api/v1/asset/0e99c1a6da379d1f4151fb9df90449d40d0608f6cb33a5bcbfc8c265f42bab0a/icon`
        );
      } else {
        res = await fetch(`https://liquid.network/api/v1/asset/${assetId}/icon`);
        if (!res.ok) {
          setIcon(null);
          return;
        }
      }
      const imageBlob = await res.blob();
      reader.readAsDataURL(imageBlob);
      reader.onloadend = () => {
        const base64data = reader.result;
        setIcon(base64data?.toString() ?? null);
      };
    })();
  }, [assetId, network]);

  return (
    <>
      {icon === null ? (
        <img src={GenericIcon} alt="d" className="currency-icon" width={size} height={size} />
      ) : (
        <img src={icon} alt="currency-icon" className="currency-icon" width={size} height={size} />
      )}
    </>
  );
};
