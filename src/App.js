import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyle from './commons/styles/global'
import Main from './containers/Main'
import theme from './commons/constants/theme'
import './commons/i18n'

const App = () => (

  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <GlobalStyle />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
