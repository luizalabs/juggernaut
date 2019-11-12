import React, { memo } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import LoadingStyled from './style'

const Loading = () => (
  <LoadingStyled>
    <CircularProgress />
  </LoadingStyled>
)

export default memo(Loading)
