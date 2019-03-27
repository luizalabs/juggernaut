import { EXAMPLE_CLICK, EXAMPLE_SUCCESS, EXAMPLE_ERROR } from '../Types'

export const exampleAction = () => ({
  type: EXAMPLE_CLICK
})

export const exampleActionSuccess = (event) => ({
  type: EXAMPLE_SUCCESS,
  payload: event
})

export const exampleActionError = (event) => ({
  type: EXAMPLE_ERROR,
  payload: event
})
