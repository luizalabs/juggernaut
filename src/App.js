import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './commons/styles/global';
import Main from './containers/Main';
import theme from './commons/constants/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  </ThemeProvider>
);

export default App;
