export const transformSummaryToCards = (data) => {
  const summary = data?.summary ? data.summary[0] : data;
  if (!summary) return [];
  return [
    {
      title: 'Username',
      value: summary.username,
      linkText: 'Edit Profile',
      linkTo: '/auth',
    },
    {
      title: 'Card',
      value: summary.cardNumber,
      linkText: 'See other cards',
      linkTo: '/cards',
    },
    {
      title: 'Tips transferred',
      value: summary.tipsTransferred,
      linkText: 'View details',
      linkTo: '/cards',
    },
    {
      title: 'Tips amount',
      value: summary.tipsAmount,
      linkText: 'View details',
      linkTo: '/cards',
    },
    {
      title: 'GPT paid',
      value: summary.gptPaid,
      linkText: 'View details',
      linkTo: '/cards',
    },
    {
      title: 'Tips processing',
      value: summary.tipsProcessing,
      linkText: 'View details',
      linkTo: '/cards',
    },
  ];
};
