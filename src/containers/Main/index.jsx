import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../../routes'
import Loading from '../../components/Loading'
import ContainerStyled from './styled'

const Main = () => (
  <ContainerStyled>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    </Suspense>
  </ContainerStyled>
)

export default Main
