import { projectReducer } from './project-reducer'
import certReducer from '../slices/cert'
import uiReducer from '../slices/ui'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  projectReducer,
  cert: certReducer,
  ui: uiReducer,
})
