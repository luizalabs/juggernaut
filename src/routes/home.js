import { lazy } from 'react'

const Home = lazy(() => import('containers/Home'))

const route = [
  {
    path: '/',
    component: Home,
    exact: true
  }
]

export default route
