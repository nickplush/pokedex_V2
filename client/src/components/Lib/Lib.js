import React from 'react'
import { useSelector } from 'react-redux'
import Table from './Table'
import { Paginator } from './Paginator'
import Selector from './Selector'

const Lib = () => {
  const pokemons = useSelector(state => state.pokemon)
  return (
    <>
    <div className={'funcBar'}>
      <Paginator/>
      <Selector/>
    </div>
      <Table pokemons={pokemons.pokeBase} display={true}/>
    </>
  )
}

export default Lib
