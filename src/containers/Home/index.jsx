import React from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const Home = ({ t }) => {
  return (
    <div>
      <Button variant="contained">
        { t('general.welcome') }
      </Button>
    </div>
  )
}

Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(Home)
