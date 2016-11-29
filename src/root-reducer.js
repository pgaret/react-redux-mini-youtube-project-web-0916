import { combineReducers } from 'redux'

function reducer(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      return {mainVideo: action.payload[0], thumbnails: action.payload.slice(1,6)}
    case "RECEIVE_VIDEOS":
      return {mainVideo: action.payload[0], thumbnails: action.payload.slice(1, 6)}
    case "CHANGE_MAIN":
      return {mainVideo: action.payload.mainVideo, thumbnails: [...action.payload.thumbnails, state.mainVideo]}
    default:
      return state
  }
}


const rootReducer = combineReducers({reducer: reducer})

export default rootReducer
