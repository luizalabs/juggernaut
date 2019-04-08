import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './containers/Main'
import './commons/i18n'
import theme from './commons/constants/theme'
import Juggernaut from './commons/styles/juggernaut'

const App = () => (
  <Juggernaut theme={theme}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Juggernaut>
)

export default App
