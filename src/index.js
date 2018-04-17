import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './compoments/App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

/**
 * Set redux store and react router.
 */
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

/**
 * Render APP.
 */
render(App);

/**
 * Create React App's register service worker.
 */
registerServiceWorker();
