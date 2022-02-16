import { Col, Row } from 'antd';
import dayjs from 'dayjs';
import { BarChart, XAxis, Tooltip, Bar, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    time: '2021-01-09',
    value: 4000,
  },
  {
    time: '2021-02-03',
    value: 3000,
  },
  {
    time: '2021-02-16',
    value: 2000,
  },
  {
    time: '2021-03-09',
    value: 2780,
  },
  {
    time: '2021-05-21',
    value: 1890,
  },
  {
    time: '2021-05-01',
    value: 2390,
  },
  {
    time: '2021-05-23',
    value: 234,
  },
  {
    time: '2021-05-27',
    value: 567,
  },
  {
    time: '2021-06-03',
    value: 1000,
  },
  {
    time: '2021-06-12',
    value: 1267,
  },
  {
    time: '2021-06-23',
    value: 2009,
  },
  {
    time: '2021-06-24',
    value: 2089,
  },
  {
    time: '2021-06-28',
    value: 3001,
  },
  {
    time: '2021-07-01',
    value: 3589,
  },
  {
    time: '2021-07-06',
    value: 3678,
  },
  {
    time: '2021-07-14',
    value: 3890,
  },
];

interface VolumeChartProps {
  topLeft: JSX.Element;
  topRight: JSX.Element;
}

export const VolumeChart = ({ topLeft, topRight }: VolumeChartProps): JSX.Element => {
  return (
    <>
      <Row>
        <Col span={12}>{topLeft}</Col>
        <Col span={12}>{topRight}</Col>
      </Row>
      <ResponsiveContainer width="100%" height={265}>
        <BarChart width={730} height={250} data={data} margin={{ top: 5, right: 5, bottom: -12, left: -12 }}>
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tickFormatter={(time) => dayjs(time).format('DD')}
            minTickGap={1}
            tickMargin={1}
            tickSize={1}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#44a13c" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
