import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxPromise from 'redux-promise'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
