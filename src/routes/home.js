import { lazy } from 'react'

const Home = lazy(() => import('containers/Home'))
const Main = lazy(() => import('containers/App'))

const route = [
  {
    path: '/',
    main: Home,
    exact: true
  },
  {
    path: '/App',
    main: Main,
    exact: true
  }
]

export default route
