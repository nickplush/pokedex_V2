import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../actions/userActions'
import { StarBorder, Star } from '@material-ui/icons'
import { number } from 'prop-types'

export const CardButton = ({ pokeId }) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.token.favorites)
  const addFav = () => {
    dispatch(addFavorite(pokeId, favorites))
  }

  const removeFav = () => {
    dispatch(removeFavorite(pokeId, favorites))
  }
  const renderContent = () => {
    switch (favorites.indexOf(pokeId)) {
      case -1:
        return <StarBorder onClick={addFav} className={'poiner'}>Add Favorite</StarBorder>
      default:
        return <Star onClick={removeFav} className={'poiner'}>Remove</Star>
    }
  }
  return (renderContent())
}
CardButton.propTypes = {
  pokeId: number
}
