import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'
import Label from './components/Label/Label'
import { fetchPokemon } from './actions/getPoke'
import Lib from './components/Lib/Lib'
import Favorite from './components/Lib/Favorite'
import { fetchUser } from './actions/authActions'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  const filter = useSelector(state => state.selector)
  const start = () => {
    dispatch(fetchPokemon(first, count, filter))
  }
  const count = useSelector(state => state.paginator.count)
  const first = useSelector(state => state.paginator.first)
  useEffect(() => start())
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/lib" component={Lib}/>
        <Route path="/favorite" component={Favorite}/>
        <Route exact path="/" component={Label}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
