import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}))

// positions loader in the center of the containing div element
// enlarges animation for better visibility
const loaderStyle = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  margin: 'auto',
  transform: 'scale(2)'
}

const name = 'Loading Component'

// sizes wrapper to viewport dimensions
const wrapperStyle = {
  width: '100vw',
  height: '100vh'
}

const Loading = () => {
  console.groupCollapsed(name)
  console.log(`${name} implemented by %cGreg Brewton www.Studio42Dev.com %cfor %cHacktoberfest 2019`, 'color: #007AAF', 'color: white', 'color: #FF7145')
  console.groupEnd(name)
  const classes = useStyles()
  return (
    <div style={wrapperStyle}>
      <CircularProgress style={loaderStyle} className={classes.progress} />
    </div>
  )
}

export default Loading
