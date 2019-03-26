import React from 'react'
import { withTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'

const Hello = (t) => {
  return (
    <div>
      <Button variant="contained">
        { t('general.welcome') }
      </Button>
    </div>
  )
}

export default withTranslation()(Hello)
