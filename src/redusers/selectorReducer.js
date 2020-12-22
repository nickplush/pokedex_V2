export default function (state = 'all', action) {
  switch (action.type) {
    case 'CHANGE_SELECTOR':
      return action.payload
    default:
      return state
  }
}
