const sortTransactions = (transactions = []) => {
  return [...transactions].sort((a, b) => {
    const parseDate = (dateStr) => {
      const [day, month, year] = dateStr.split('/');
      return new Date(year, month, -1, day);
    };
    return parseDate(a.date) - parseDate(b.date);
  });
};

export const transformTransactionsToDays = (transactions = []) => {
  const sorted = sortTransactions(transactions);
  return sorted.map((transaction) => ({
    name: transaction.date,
    value: parseFloat(transaction.amount.replace('$', '')),
  }));
};

export const transformTransactionsToMonths = (transactions = []) => {
  const sorted = sortTransactions(transactions);
  const months = sorted.reduce((acc, transaction) => {
    const [, month, year] = transaction.date.split('/');
    const key = `${month}/${year}`;
    const amount = parseFloat(transaction.amount.replace('$', ''));

    acc[key] = (acc[key] || 0) + amount;
    return acc;
  }, {});

  return Object.entries(months).map(([key, value]) => ({
    name: key,
    value: value,
  }));
};
