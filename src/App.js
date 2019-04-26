import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyle from 'commons/styles/global'
import Main from 'containers/Main'
import theme from 'commons/constants/theme'
import 'commons/i18n'

const App = () => (
  <Juggernaut theme={theme}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Juggernaut>
)

export default App
