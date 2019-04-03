import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.palette.primary.background};
  height: 100vh;
  text-align: center;
`

const StyledTitle = styled(Typography)`
  margin: 0;
  margin-bottom: 10px;
`

const StyledSubtitle = styled(Typography)`
  font-style: italic;
  font-weight: 400;
  margin: 0;
`

export {
  StyledContainer,
  StyledTitle,
  StyledSubtitle
}
