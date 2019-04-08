import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './global'
import PropTypes from 'prop-types'

const Juggernaut = ({ children: Children, theme }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <GlobalStyle />
        {Children}
      </Fragment>
    </ThemeProvider>
  </MuiThemeProvider>
)

Juggernaut.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
}

export default Juggernaut
