import { Col, Row } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import type { MarketReport } from '../../api-spec/generated/js/operator_pb';
import { PredefinedPeriod } from '../../api-spec/generated/js/operator_pb';

interface VolumeChartProps {
  topLeft: JSX.Element;
  topRight: JSX.Element;
  marketReport?: MarketReport.AsObject;
  marketReportPredefinedPeriod: PredefinedPeriod;
}

export const VolumeChart = ({
  topLeft,
  topRight,
  marketReport,
  marketReportPredefinedPeriod,
}: VolumeChartProps): JSX.Element => {
  // Prepare data starting from last element
  const data = useMemo(() => {
    // TODO: Convert baseVolume to LBTC unit or fractional
    // Wait for https://github.com/tdex-network/tdex-dashboard/pull/296
    return marketReport?.groupedVolumeList.reduceRight(
      (acc, curr) => acc.concat({ time: curr.startDate, value: curr.baseVolume }),
      [] as { time: string; value: number }[]
    );
  }, [marketReport?.groupedVolumeList]);

  // Calculate yAxis width
  const yAxis = document.getElementsByClassName('recharts-cartesian-axis recharts-yAxis')[0];
  const yAxisWidth = (yAxis as SVGGraphicsElement)?.getBBox().width;

  return (
    <>
      <Row>
        <Col span={4}>{topLeft}</Col>
        <Col span={20}>{topRight}</Col>
      </Row>
      <ResponsiveContainer width="100%" height={265}>
        <BarChart width={730} height={250} data={data} margin={{ top: 5, bottom: -12 }}>
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tickFormatter={(time) => {
              if (
                marketReportPredefinedPeriod === PredefinedPeriod.LAST_DAY ||
                marketReportPredefinedPeriod === PredefinedPeriod.LAST_WEEK
              ) {
                return `${dayjs(time).format('HH')}h`;
              } else {
                return dayjs(time).format('DD/MM');
              }
            }}
            minTickGap={10}
            tickMargin={1}
            tickSize={1}
          />
          <YAxis width={yAxisWidth} />
          <Tooltip />
          <Bar dataKey="value" fill="#44a13c" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
