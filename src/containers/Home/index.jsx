import React from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import {
  StyledContainer,
  StyledTitle,
  StyledSubtitle
} from './style'
import logo from '../../assets/images/juggernaut.gif'

const Home = ({ t }) => (
  <StyledContainer>
    <img
      src={logo}
      alt="Juggernaut Boilerplate"
    />
    <StyledTitle>{ t('general.welcome') }</StyledTitle>
    <StyledSubtitle>{ t('general.description') }</StyledSubtitle>
  </StyledContainer>
)

Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(Home)
