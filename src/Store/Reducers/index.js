import { combineReducers } from 'redux'
import worklist from './worklist'

const rootReducer = combineReducers({ work: worklist })

export default rootReducer
