import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import ContainerStyled from './styled';

const Main = () => (
  <ContainerStyled>
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
  </ContainerStyled>
);

export default Main;
