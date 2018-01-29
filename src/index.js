import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
<HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();

