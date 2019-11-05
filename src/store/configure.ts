import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducer';

export default function configureStore(initialState?: any) {
  let composeEnhancers: any;
  try {
    // @ts-ignore
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } catch (err) {
    composeEnhancers = compose;
  }
  const enhancer = composeEnhancers();
  const store = createStore(rootReducer, initialState, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}
