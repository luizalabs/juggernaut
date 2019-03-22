import { lazy } from 'react';

const Home = lazy(() => import('../containers/Home'));

const route = [
  {
    path: '/',
    main: Home,
    exact: true,
  },
];

export default route;
