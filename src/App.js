import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/styles'
import Juggernaut from 'containers/Juggernaut'
import theme from 'commons/constants/theme'
import Main from 'containers/Main'

const App = () => (
  <StylesProvider injectFirst>
    <Juggernaut theme={theme}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Juggernaut>
  </StylesProvider>
)

export default App
