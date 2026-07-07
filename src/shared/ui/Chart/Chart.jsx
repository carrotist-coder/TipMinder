import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts';

export const Chart = ({
  data = [
    { name: '0', value: 0.6 },
    { name: '1', value: 0.2 },
    { name: '2', value: 0.9 },
    { name: '3', value: 0.1 },
    { name: '4', value: 0.42 },
    { name: '5', value: 0.3 },
    { name: '6', value: 0.2 },
  ],
}) => (
  <ResponsiveContainer width="100%" height={600}>
    <AreaChart data={data}>
      <CartesianGrid vertical={false} stroke="#D0D0D0" />
      <XAxis dataKey="name" hide={true} />
      <YAxis
        domain={[0, 1]}
        ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}
        axisLine={false}
        tickLine={false}
      />

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
