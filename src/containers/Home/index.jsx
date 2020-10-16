import React from 'react'
import PropTypes from 'prop-types'
import { Trans, withTranslation } from 'react-i18next'
import logo from 'assets/images/juggernaut.gif'
import { StyledContainer, StyledTitle, StyledSubtitle, StyledImage } from './style'

const Home = ({ t }) => (
  <StyledContainer>
    <StyledImage
      src={logo}
      alt="Gif by Reuno"
      title="Gif by Reuno"
    />
    <StyledTitle color="primary" component="h1" variant="h4" gutterBottom>
      <Trans>{t('general.welcome')}</Trans>
    </StyledTitle>
    <StyledSubtitle color="primary" component="h3" variant="h5">
      { t('general.description') }
    </StyledSubtitle>
  </StyledContainer>
)

Home.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation()(Home)
