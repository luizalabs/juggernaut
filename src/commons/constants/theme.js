import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2685BE'
    }
  },
  typography: {
    useNextVariants: true
  }
})

export default theme