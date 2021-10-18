import {PageFirst, PageSecond} from '../../devalore2/screens';
import {
  PAGE_1_ROUTE,
  PAGE_1_TITLE,
  PAGE_2_ROUTE,
  PAGE_2_TITLE,
} from './constants';

export const publicRoutes = [
  {
    name: PAGE_1_ROUTE,
    Component: PageFirst,
    title: PAGE_1_TITLE,
  },
  {
    name: PAGE_2_ROUTE,
    Component: PageSecond,
    title: PAGE_2_TITLE,
  },
];
