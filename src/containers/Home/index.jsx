import React from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const Home = ({ t }) => <h1>{ t('general.welcome') }</h1>

Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(Home)
