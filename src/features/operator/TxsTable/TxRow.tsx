import Icon, { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import type { TradeInfo, Withdrawal } from '../../../api-spec/generated/js/operator_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit.svg';
import { CurrencyIcon } from '../../../common/CurrencyIcon';
import { timeAgo } from '../../../utils';
import { useGetTransactionByIdQuery } from '../../liquid.api';

import type { DepositRow } from './DepositRows';
import type { TableMode } from './index';

export type TxData = TradeInfo.AsObject & DepositRow & Withdrawal.AsObject;

interface TxRowProps {
  mode: TableMode;
  tickers: {
    baseAssetTicker: string;
    quoteAssetTicker: string;
    baseAssetTickerFormatted: string;
    quoteAssetTickerFormatted: string;
  };
  baseAmountFormatted: string;
  quoteAmountFormatted: string;
  row: TxData;
  txId: string;
}

export const TxRow = ({
  mode,
  tickers,
  baseAmountFormatted,
  quoteAmountFormatted,
  row,
  txId,
}: TxRowProps): JSX.Element => {
  const { data: tx, refetch: refetchTx } = useGetTransactionByIdQuery(txId);
  if (!tx?.status?.confirmed) {
    setTimeout(refetchTx, 1000 * 60);
  }
  const time = row?.timestampUnix || row?.requestTimeUnix || tx?.status.block_time;

  let tickerStr;
  const hasBaseAmount = baseAmountFormatted !== 'N/A' && Number(baseAmountFormatted) !== 0;
  const hasQuoteAmount = quoteAmountFormatted !== 'N/A' && Number(quoteAmountFormatted) !== 0;
  if (hasBaseAmount && hasQuoteAmount) {
    tickerStr = `${tickers.baseAssetTickerFormatted} - ${tickers.quoteAssetTickerFormatted}`;
  } else if (hasBaseAmount) {
    tickerStr = tickers.baseAssetTickerFormatted;
  } else if (hasQuoteAmount) {
    tickerStr = tickers.quoteAssetTickerFormatted;
  }

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
            <span className="market-icons-translate__small">
              <CurrencyIcon className="base-icon" currency={tickers.baseAssetTicker} size={16} />
              <CurrencyIcon className="quote-icon" currency={tickers.quoteAssetTicker} size={16} />
            </span>
            {`Swap ${tickers.baseAssetTickerFormatted} for ${tickers.quoteAssetTickerFormatted}`}
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

        {(mode === 'deposit' || mode === 'trade') && <td>{quoteAmountFormatted}</td>}
        {mode === 'withdraw' && <td>{baseAmountFormatted}</td>}
        <td>{`${baseAmountFormatted} ${tickers.baseAssetTickerFormatted}`}</td>
        <td>{`${quoteAmountFormatted} ${tickers.quoteAssetTickerFormatted}`}</td>
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
