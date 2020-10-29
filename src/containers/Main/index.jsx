import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from 'components/Loading'
import routes from '../../routes'
import { Container } from './styles'

const Main = () => (
  <Container>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  </Container>
)

export default Main
