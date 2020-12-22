export default function (state = {
  pokeBase: [],
  count: 0
}, action) {
  switch (action.type) {
    case 'FETCH_POKEMON':
      return action.payload
    default:
      return state
  }
}
