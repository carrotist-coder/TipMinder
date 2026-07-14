export const getChartTicks = (data, ticksCount = 10, toFixed = 1) => {
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return Array.from({ length: ticksCount }, (_, i) => {
    const tick = min + (i * (max - min)) / (ticksCount - 1);
    return parseFloat(tick.toFixed(toFixed));
  });
};
