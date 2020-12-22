import { combineReducers } from 'redux'
import paginatorReducer from './paginatorReducer'
import fetchReducer from './fetchReducer'
import authReducer from './authReducer'
import selectorReducer from './selectorReducer'

export default combineReducers({
  paginator: paginatorReducer,
  pokemon: fetchReducer,
  token: authReducer,
  selector: selectorReducer
})
