import React, { useEffect, useState } from 'react'
import Table from './Table'
import { getPokemon } from '../../actions/getPoke'
import { useSelector } from 'react-redux'

const Favorite = () => {
  const token = useSelector(state => state.token)
  const [a, setA] = useState([])

  useEffect(() => {
    fetchFavoritesPokemons()
  }, [token])

  const fetchFavoritesPokemons = async () => {
    if (token) {
      const getPokemonsInfoPromises = token.favorites.map(getPokemon)
      const pokemonsInfo = await Promise.all(getPokemonsInfoPromises)
      setA(pokemonsInfo)
    } else {
      setA([])
    }
  }
  return <Table pokemons={a} display={false}/>
}

export default Favorite
