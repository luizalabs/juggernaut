import React from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { SentimentSatisfiedAlt } from '@material-ui/icons';

const Home = ({ t }) => {
  return (
    <div>
      <Typography color="primary" component="h2" variant="h4" gutterBottom>
      { t('general.welcome') }
      <SentimentSatisfiedAlt />
      </Typography>
    </div>
  )
}

Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(Home)
