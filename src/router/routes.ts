import { RouteConfig } from 'vue-router';

import * as Pages from '@/pages';

export const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Pages.Home },
];
