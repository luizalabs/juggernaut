import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a70400',
      background: '#fbd489'
    }
  },
  typography: {
    useNextVariants: true
  }
})

export default theme
