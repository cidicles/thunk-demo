import { 
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import rootReducer from './Reducers/Main';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
  );
  return store
}
