import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from 'components/Loading'
import routes from '../../routes'
import StyledContainer from './style'

const Main = () => (
  <StyledContainer>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    </Suspense>
  </StyledContainer>
)

export default Main
