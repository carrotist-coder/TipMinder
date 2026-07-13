import { ROUTES } from '@shared/config/routes';
import { LINKS } from '@entities/summary/helpers/constants';

export const transformSummaryToCards = (data) => {
  const summary = data?.summary ? data.summary[0] : data;
  if (!summary) return [];
  return [
    {
      title: 'Username',
      value: summary.username,
      linkText: LINKS.EDIT_PROFILE,
      linkTo: ROUTES.AUTH,
    },
    {
      title: 'Card',
      value: summary.cardNumber,
      linkText: LINKS.OTHER_CARDS,
      linkTo: ROUTES.CARDS,
    },
    {
      title: 'Tips transferred',
      value: summary.tipsTransferred,
      linkText: LINKS.DETAILS,
      linkTo: ROUTES.CARDS,
    },
    {
      title: 'Tips amount',
      value: summary.tipsAmount,
      linkText: LINKS.DETAILS,
      linkTo: ROUTES.CARDS,
    },
    {
      title: 'GPT paid',
      value: summary.gptPaid,
      linkText: LINKS.DETAILS,
      linkTo: ROUTES.CARDS,
    },
    {
      title: 'Tips processing',
      value: summary.tipsProcessing,
      linkText: LINKS.DETAILS,
      linkTo: ROUTES.CARDS,
    },
  ];
};
