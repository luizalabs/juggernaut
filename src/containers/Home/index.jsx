import React from 'react'
import { withTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'

const Hello = (t) => {
  return (
    <div>
      <Button variant="contained">
        Hello World
      </Button>
    </div>
  )
}
// const Home = ({ t }) => <h1 >{ t('general.welcome') }</h1>

export default withTranslation()(Hello)
