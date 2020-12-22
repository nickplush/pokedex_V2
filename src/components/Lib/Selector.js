import React, { useEffect, useState } from 'react'
import { changeSelector, getTypes } from '../../actions/selectorActions'
import { MenuItem, Select } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

const Selector = () => {
  const [a, setA] = useState([])
  const selector = useSelector(state => state.selector)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(changeSelector(event.target.value))
  }

  useEffect(() => {
    fetchTypesOfPokemons()
  }, [])

  const fetchTypesOfPokemons = async () => {
    const types = await getTypes()
    setA(types)
  }

  const renderTypes = () => {
    return a.map((item) =>
        <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
    )
  }

  return (
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={selector}
        onChange={handleChange}
      >
        <MenuItem key={Math.random()} value={'all'}>ALL</MenuItem>
        {renderTypes()}
      </Select>

  )
}

export default Selector
