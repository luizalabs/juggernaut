import styled from 'styled-components'

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.primaryBackground};
  height: 100vh;
  text-align: center;
`

const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`

const StyledSubtitle = styled.h3`
  font-style: italic;
  font-weight: 400;
  margin: 0;
`

export {
  StyledContainer,
  StyledTitle,
  StyledSubtitle
}
