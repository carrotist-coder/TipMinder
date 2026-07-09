import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts';
import { getChartTicks } from '@shared/lib/helpers/getChartTicks';
import { useMemo } from 'react';

export const Chart = ({ data }) => {
  const ticks = useMemo(() => getChartTicks(data), [data]);
  return (
    <ResponsiveContainer width="100%" height={600}>
      <AreaChart data={data}>
        <CartesianGrid vertical={false} stroke="#D0D0D0" />
        <XAxis dataKey="name" hide={true} />
        <YAxis ticks={ticks} axisLine={false} tickLine={false} />

        <Tooltip
          cursor={{ stroke: '#ff8c00', strokeWidth: 1 }}
          contentStyle={{
            borderRadius: '5px',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          itemStyle={{ color: '#444444' }}
          formatter={(value) => [`${value}$`, '']}
          labelFormatter={() => ''}
          separator=""
        />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#ff8c00"
          strokeWidth={4}
          fill="#ffebd8"
          activeDot={{
            r: 10,
            fill: '#ffffff',
            stroke: '#FB8F42',
            strokeWidth: 3,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
