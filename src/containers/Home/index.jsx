import React from 'react'
import { withTranslation } from 'react-i18next'

const Home = ({ t }) => <h1>{ t('general.welcome') }</h1>

export default withTranslation()(Home)
