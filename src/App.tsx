import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configure from './store/configure';
import Routes from './pages';

const { store, persistor } = configure();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
