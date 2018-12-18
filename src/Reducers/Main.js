import {
  REQUEST_GIFS,
  RECEIVE_GIFS
} from '../Actions/Index';

const initialState = {
  updating: false,
  gifs: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return Object.assign({}, state, {
        updating: true
      })
    case RECEIVE_GIFS:
      return Object.assign({}, state, {
        gifs: action.gifs,
        updating: false
      })
    default:
      return state
  }
}

export default rootReducer