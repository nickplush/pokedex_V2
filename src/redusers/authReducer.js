export default function (state = null, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload || false
    case 'CHANGE_FAVORITE':
      return { ...state, favorites: action.payload }
    default:
      return state
  }
}
