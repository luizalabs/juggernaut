import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Juggernaut from 'containers/Juggernaut'
import theme from 'commons/constants/theme'
import Main from 'containers/Main'

const App = () => (
  <Juggernaut theme={theme}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Juggernaut>
)

export default App
