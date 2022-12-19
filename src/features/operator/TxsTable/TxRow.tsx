import Icon, { RightOutlined } from '@ant-design/icons';
import { Grid } from 'antd';
import classNames from 'classnames';

import type { TradeInfo, Withdrawal } from '../../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit.svg';
import { CurrencyIcon } from '../../../common/CurrencyIcon';
import type { Asset } from '../../../domain/asset';
import { timeAgo } from '../../../utils';
import { useGetTransactionByIdQuery } from '../../liquid.api';

import type { DepositRow } from './DepositRows';
import type { TableMode } from './index';

export type TxData = TradeInfo & DepositRow & Withdrawal;

const { useBreakpoint } = Grid;

interface TxRowProps {
  mode: TableMode;
  baseAmountFormatted: string;
  quoteAmountFormatted: string;
  row: TxData;
  txId: string;
  baseAsset?: Asset;
  quoteAsset?: Asset;
}

export const TxRow = ({
  mode,
  baseAmountFormatted,
  quoteAmountFormatted,
  row,
  txId,
  baseAsset,
  quoteAsset,
}: TxRowProps): JSX.Element => {
  const { data: tx, refetch: refetchTx } = useGetTransactionByIdQuery(txId, { skip: !txId });
  if (!tx?.status?.confirmed) {
    setTimeout(refetchTx, 1000 * 60);
  }
  const time = row?.timestampUnix || row?.requestTimeUnix || tx?.status.block_time;

  let tickerStr;
  const hasBaseAmount = baseAmountFormatted !== 'N/A' && Number(baseAmountFormatted) !== 0;
  const hasQuoteAmount = quoteAmountFormatted !== 'N/A' && Number(quoteAmountFormatted) !== 0;
  if (hasBaseAmount && hasQuoteAmount) {
    tickerStr = `${baseAsset?.ticker} - ${quoteAsset?.ticker}`;
  } else if (hasBaseAmount) {
    tickerStr = baseAsset?.ticker;
  } else if (hasQuoteAmount) {
    tickerStr = quoteAsset?.ticker;
  }
  const screens = useBreakpoint();

  return (
    <>
      <tr
        onClick={(ev) => {
          ev.currentTarget.classList.toggle('opened');
          ev.currentTarget.nextElementSibling?.classList.toggle('opened');
        }}
      >
        {mode === 'trade' && (
          <td>
            {screens.md ? (
              <>
                <span className="market-icons-translate__small">
                  <CurrencyIcon assetId={baseAsset?.asset_id ?? ''} size={16} />
                  <CurrencyIcon assetId={quoteAsset?.asset_id ?? ''} size={16} />
                </span>
                {`Swap ${baseAsset?.ticker} for ${quoteAsset?.ticker}`}
              </>
            ) : (
              'Swap'
            )}
          </td>
        )}
        {mode === 'withdraw' && (
          <td>
            <Icon component={depositIcon} className="rotate-icon tx-icon" />
            {`Withdraw ${tickerStr}`}
          </td>
        )}
        {mode === 'deposit' && (
          <td>
            <Icon component={depositIcon} className="tx-icon" />
            {`Deposit ${tickerStr}`}
          </td>
        )}
        <td>
          {(mode === 'deposit' || mode === 'withdraw') && (
            <span
              className={classNames('status', {
                status__confirmed: tx?.status?.confirmed,
                status__pending: !tx?.status?.confirmed,
              })}
            >
              {tx?.status?.confirmed ? 'Confirmed' : 'Pending'}
            </span>
          )}
          {mode === 'trade' && (
            <span
              className={classNames('status', {
                status__failed: row.status?.failed,
                status__success: !row.status?.failed,
              })}
            >
              {row.status?.failed ? 'Failed' : 'Success'}
            </span>
          )}
        </td>
        <td>{baseAmountFormatted}</td>
        <td>{`${baseAmountFormatted} ${baseAsset?.formattedTicker}`}</td>
        <td>{`${quoteAmountFormatted} ${quoteAsset?.formattedTicker}`}</td>
        <td data-time={time}>{timeAgo(time)}</td>
        <td>
          <RightOutlined />
        </td>
      </tr>
      <tr
        className="details"
        data-time={time}
        onClick={(ev) => {
          ev.currentTarget.classList.toggle('opened');
          ev.currentTarget.previousElementSibling?.classList.toggle('opened');
        }}
      >
        <td />
        <td colSpan={6}>
          <div className="d-flex details-content-container">
            <div className="d-flex details-content">
              {!row.status?.failed ? (
                <>
                  <span className="dm-mono dm-mono__bold">Transaction Id</span>
                  {mode === 'trade' && (
                    <a href={row.txUrl} target="_blank" rel="noreferrer">
                      {txId}
                    </a>
                  )}
                  {(mode === 'deposit' || mode === 'withdraw') && (
                    <a href={row.txUrl} target="_blank" rel="noreferrer">
                      {txId}
                    </a>
                  )}
                </>
              ) : (
                <>
                  <span className="dm-mono dm-mono__bold">Failure info</span>
                  <span
                    className={classNames('status', {
                      status__confirmed: tx?.status?.confirmed,
                      status__pending: !tx?.status?.confirmed,
                    })}
                  >
                    {row.failInfo?.failureMessage ?? 'N/A'}
                  </span>
                </>
              )}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
