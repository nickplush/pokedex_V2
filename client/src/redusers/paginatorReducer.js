export default function (
  state = {
    count: 10,
    page: 0,
    first: 0
  }, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return { ...state, count: action.payload }
    case 'CHANGE_PAGE':
      return { ...state, page: action.payload }
    case 'G_PAGE':
      return { ...state, first: action.payload }
    default:
      return state
  }
}
