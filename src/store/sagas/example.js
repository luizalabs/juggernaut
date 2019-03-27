import { put } from 'redux-saga/effects'
import { exampleActionSuccess, exampleActionError } from '../actions/exampleAction'
import exampleApi from 'resources/example'

export function* example () {
  try {
    const result = yield exampleApi.all()
    yield put(exampleActionSuccess(result))
  } catch (err) {
    yield put(exampleActionError(err))
  }
}
