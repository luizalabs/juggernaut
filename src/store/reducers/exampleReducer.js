import { EXAMPLE_REQUEST, EXAMPLE_SUCCESS, EXAMPLE_ERROR } from '../Types'
const INITIAL_STATE = {
  examples: [],
  error: '',
  loading: false
}

// eslint-disable-next-line complexity
export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action
  switch (type) {
    case EXAMPLE_REQUEST:
      return { ...state, loading: true }
    case EXAMPLE_SUCCESS:
      return {
        ...state,
        examples: payload,
        error: false,
        loading: false
      }
    case EXAMPLE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  }
}
