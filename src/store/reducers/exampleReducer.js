const INITIAL_STATE = {
  subtitle: 'to Magalu\'s boilerplate React App.'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED':
      return { ...state, subtitle: action.payload }
    default:
      return state
  }
}
