import { Typography, Radio } from 'antd';
import type { Dispatch, SetStateAction } from 'react';

import type { MarketReport } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { PredefinedPeriod, TimeFrame } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { useTypedSelector } from '../../../../app/store';
import { VolumeChart } from '../../../../common/VolumeChart';
import type { Asset } from '../../../../domain/asset';

interface VolumePanelProps {
  volumeAsFavCurrencyFormatted?: JSX.Element;
  baseAsset: Asset;
  marketReport?: MarketReport;
  setMarketReportPredefinedPeriod: Dispatch<SetStateAction<PredefinedPeriod>>;
  setMarketReportTimeFrame: Dispatch<SetStateAction<TimeFrame>>;
  marketReportPredefinedPeriod: PredefinedPeriod;
}

const { Title } = Typography;

export const VolumePanel = ({
  volumeAsFavCurrencyFormatted,
  baseAsset,
  marketReport,
  setMarketReportPredefinedPeriod,
  setMarketReportTimeFrame,
  marketReportPredefinedPeriod,
}: VolumePanelProps): JSX.Element => {
  const { lbtcUnit } = useTypedSelector(({ settings }) => settings);
  return (
    <VolumeChart
      topLeft={
        <div>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline" level={3}>
            Volume
          </Title>
          <span className="dm-sans dm-sans__xx ml-2 break-all">{volumeAsFavCurrencyFormatted}</span>
        </div>
      }
      topRight={
        <div className="text-end">
          <Radio.Group className="radio-green" defaultValue={marketReportPredefinedPeriod}>
            <Radio.Button
              value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_DAY}
              onClick={() => {
                setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_DAY);
                setMarketReportTimeFrame(TimeFrame.TIME_FRAME_HOUR);
              }}
            >
              1D
            </Radio.Button>
            <Radio.Button
              value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_WEEK}
              onClick={() => {
                setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_WEEK);
                setMarketReportTimeFrame(TimeFrame.TIME_FRAME_FOUR_HOURS);
              }}
            >
              7D
            </Radio.Button>
            <Radio.Button
              value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_MONTH}
              onClick={() => {
                setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_MONTH);
                setMarketReportTimeFrame(TimeFrame.TIME_FRAME_DAY);
              }}
            >
              1M
            </Radio.Button>
            <Radio.Button
              value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_THREE_MONTHS}
              onClick={() => {
                setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_THREE_MONTHS);
                setMarketReportTimeFrame(TimeFrame.TIME_FRAME_DAY);
              }}
            >
              3M
            </Radio.Button>
            <Radio.Button
              value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_YEAR}
              onClick={() => {
                setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_YEAR);
                setMarketReportTimeFrame(TimeFrame.TIME_FRAME_WEEK);
              }}
            >
              1Y
            </Radio.Button>
            <Radio.Button
              value={PredefinedPeriod.PREDEFINED_PERIOD_YEAR_TO_DATE}
              onClick={() => {
                setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_YEAR_TO_DATE);
                setMarketReportTimeFrame(TimeFrame.TIME_FRAME_WEEK);
              }}
            >
              YTD
            </Radio.Button>
            <Radio.Button
              value={PredefinedPeriod.PREDEFINED_PERIOD_ALL}
              onClick={() => {
                setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_ALL);
                setMarketReportTimeFrame(TimeFrame.TIME_FRAME_WEEK);
              }}
            >
              ALL
            </Radio.Button>
          </Radio.Group>
        </div>
      }
      marketReport={marketReport}
      marketReportPredefinedPeriod={marketReportPredefinedPeriod}
      baseAsset={baseAsset}
      lbtcUnit={lbtcUnit}
    />
  );
};
