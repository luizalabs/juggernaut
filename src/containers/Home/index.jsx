import React from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import { SentimentSatisfiedAlt } from '@material-ui/icons';

const Home = ({ t }) => {
  return (
    <div>
      <Fab
        variant="extended"
        size="medium"
        color="secondary"
        aria-label='teste' >
          <SentimentSatisfiedAlt />
          { t('general.welcome') }
      </Fab>
    </div>
  )
}

Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(Home)
