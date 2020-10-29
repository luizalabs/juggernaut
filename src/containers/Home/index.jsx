import React from 'react'
import PropTypes from 'prop-types'
import { Trans, withTranslation } from 'react-i18next'
import logo from 'assets/images/juggernaut.gif'
import { Container, Title, Subtitle, Image } from './styles'

const Home = ({ t }) => (
  <Container>
    <Image
      src={logo}
      alt="Gif by Reuno"
      title="Gif by Reuno"
    />
    <Title color="primary" component="h1" variant="h4" gutterBottom>
      <Trans>{t('general.welcome')}</Trans>
    </Title>
    <Subtitle color="primary" component="h3" variant="h5">
      { t('general.description') }
    </Subtitle>
  </Container>
)

Home.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation()(Home)
