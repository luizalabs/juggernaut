import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Container = styled.div`
  background: ${({ theme }) => theme.palette.primary.background};
  height: 100vh;
  text-align: center;
`

export const Title = styled(Typography)`
  margin: 0;
  margin-bottom: 10px;
`

export const Subtitle = styled(Typography)`
  font-style: italic;
  font-weight: 400;
  margin: 0;
`

export const Image = styled.img`
  max-width: 100%;
`
