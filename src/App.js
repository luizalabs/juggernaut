import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import './commons/i18n'
import GlobalStyle from './commons/styles/global'
import Main from './containers/Main'
import theme from './commons/constants/theme'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Fragment>
  </MuiThemeProvider>
)

export default App
