import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './commons/i18n'
import GlobalStyle from './commons/styles/global'
import Main from './containers/Main'
import theme from './commons/constants/theme'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

const App = () => (

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Fragment>
      </ThemeProvider>

    </PersistGate>
  </Provider>
)

export default App
