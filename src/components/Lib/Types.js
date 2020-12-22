import React from 'react'
import './types.css'
import classnames from 'classnames'
import { Typography } from '@material-ui/core'
import { array } from 'prop-types'
import { useDispatch } from 'react-redux'
import { changeSelector } from '../../actions/selectorActions'

export const Types = ({ types }) => {
  const dispatch = useDispatch()
  const handleClickTypes = (type) => {
    dispatch(changeSelector(type))
  }
  const pokeType = types.map(type => {
    return (
      <div key={Math.random()}>
        <Typography onClick={() => handleClickTypes(type.type.name)} className={classnames(type.type.name, 'normal')} component={'div'}>{type.type.name}</Typography>
      </div>
    )
  })
  return (
    <div className={'conteiner'}>
      {pokeType}
    </div>
  )
}
Types.propTypes = {
  types: array
}
