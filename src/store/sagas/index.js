import { all, takeLatest } from 'redux-saga/effects'

import { EXAMPLE_CLICK } from '../Types'
import { example } from './example'

export default function* rootSaga () {
  return yield all([
    takeLatest(EXAMPLE_CLICK, example)
  ])
}
