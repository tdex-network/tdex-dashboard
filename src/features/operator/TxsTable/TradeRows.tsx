import { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React from 'react';

import type { TradeInfo } from '../../../api-spec/generated/js/operator_pb';
import { CurrencyIcon } from '../../../common/CurrencyIcon';
import type { Asset } from '../../../domain/asset';
import { assetIdToTicker, timeAgo } from '../../../utils';

export interface Trade {
  tradeId: TradeInfo.AsObject['tradeId'];
  status: TradeInfo.AsObject['status'];
  swapInfo: TradeInfo.AsObject['swapInfo'];
  settleTimeUnix: TradeInfo.AsObject['settleTimeUnix'];
}

interface TradeRowsProps {
  trades?: Trade[];
  savedAssets: Asset[];
}

export const TradeRows = ({ trades, savedAssets }: TradeRowsProps): JSX.Element => {
  return (
    <>
      {trades?.map(({ swapInfo, tradeId, status, settleTimeUnix }) => {
        const baseAssetTicker = assetIdToTicker(swapInfo?.assetP || '', savedAssets);
        const quoteAssetTicker = assetIdToTicker(swapInfo?.assetR || '', savedAssets);
        return (
          <>
            <tr
              onClick={(ev) => {
                ev.currentTarget.classList.toggle('opened');
                ev.currentTarget.nextElementSibling?.classList.toggle('opened');
              }}
            >
              <td>
                <span className="market-icons-translate__small">
                  <CurrencyIcon className="base-icon" currency={baseAssetTicker || ''} size={16} />
                  <CurrencyIcon className="quote-icon" currency={quoteAssetTicker || ''} size={16} />
                </span>
                {`Swap ${baseAssetTicker} for ${quoteAssetTicker}`}
              </td>
              <td>{`$${swapInfo?.amountR}`}</td>
              <td>{`${swapInfo?.amountP} ${baseAssetTicker}`}</td>
              <td>{`${swapInfo?.amountR} ${quoteAssetTicker}`}</td>
              <td data-time={settleTimeUnix}>{timeAgo(settleTimeUnix)}</td>
              <td>
                <RightOutlined />
              </td>
            </tr>
            <tr
              className="details"
              data-time={settleTimeUnix}
              onClick={(ev) => {
                ev.currentTarget.classList.toggle('opened');
                ev.currentTarget.previousElementSibling?.classList.toggle('opened');
              }}
            >
              <td />
              <td colSpan={5}>
                <div className="d-flex details-content-container">
                  <div className="d-flex details-content">
                    <span className="dm-mono dm-mono__bold">Status</span>
                    <span
                      className={classNames('status', {
                        status__failed: status?.failed,
                        status__success: !status?.failed,
                      })}
                    >
                      {status?.failed ? 'Failed' : 'Success'}
                    </span>
                  </div>
                  <div className="d-flex details-content">
                    <span className="dm-mono dm-mono__bold">Trade Id</span>
                    <span>{tradeId}</span>
                  </div>
                </div>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};
