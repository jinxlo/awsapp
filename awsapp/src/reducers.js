import { combineReducers } from 'redux';

const initialState = {
  results: []
}

const resultsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_RESULTS':
      return {
        ...state,
        results: action.results
      }
    default:
      return state;
  }
}

export default combineReducers({
  results: resultsReducer
})
