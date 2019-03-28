import { EXAMPLE_CLICK, EXAMPLE_SUCCESS, EXAMPLE_ERROR } from '../Types'
const INITIAL_STATE = {
  examples: 'to Magalu\'s boilerplate React App.'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_CLICK:
      return { ...state, examples: action.payload }
    case EXAMPLE_SUCCESS:
      return { ...state, examples: action.payload }
    case EXAMPLE_ERROR:
      return { ...state, error: action.payload}
    default:
      return state
  }
}
