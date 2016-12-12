import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const initialState = {
  gif: '',
  isFetching: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_GIF':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_GIF':
      return Object.assign({}, state, { gif: action.gif, isFetching: false });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data,
  routing,
});

export default rootReducer;
