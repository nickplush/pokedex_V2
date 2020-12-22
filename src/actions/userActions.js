import axios from 'axios'

export const addFavorite = (pokeId, favorites) => async dispatch => {
  await axios.post('http://localhost:5000/api/favorite/', { pokeId })
  dispatch({ type: 'CHANGE_FAVORITE', payload: [...favorites, pokeId] })
}
export const removeFavorite = (pokeId, favorites) => async dispatch => {
  await axios.patch('http://localhost:5000/api/favorite/', { pokeId })
  const newFavorite = favorites.filter((item) => item !== pokeId)
  dispatch({ type: 'CHANGE_FAVORITE', payload: newFavorite })
}
