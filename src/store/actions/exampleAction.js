import { EXAMPLE_REQUEST, EXAMPLE_SUCCESS, EXAMPLE_ERROR } from '../Types'
import api from 'resources/example'

export const exampleActionRequest = () => async (dispatch) => {
  dispatch({ type: EXAMPLE_REQUEST })

  try {
    const resul = await api.all()

    dispatch({ type: EXAMPLE_SUCCESS, payload: resul })
  } catch (e) {
    dispatch({ type: EXAMPLE_ERROR, payload: e })
  }
}

export const exampleActionSuccess = (event) => ({
  type: EXAMPLE_SUCCESS,
  payload: event
})

export const exampleActionError = (error) => ({
  type: EXAMPLE_ERROR,
  payload: error
})
