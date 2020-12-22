import axios from 'axios'

export const changeSelector = (type) => (dispatch) => {
  dispatch({ type: 'CHANGE_SELECTOR', payload: type })
}
export const removeSelector = () => (dispatch) => {
  dispatch({ type: 'REMOVE_SELECTOR', payload: false })
}
export const getTypes = async () => {
  const typesArr = await axios.get('https://pokeapi.co/api/v2/type')
  return (typesArr.data.results)
}
