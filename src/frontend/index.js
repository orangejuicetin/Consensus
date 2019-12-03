import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/mainReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
// import 'bootstrap/dist/css/bootstrap.min.css'

// Enables asynchronous actions. Docs here: https://github.com/reduxjs/redux-thunk
const store = createStore(mainReducer, applyMiddleware(thunk));

if (!store) {
    throw new Error('Issue creating app store');
}

const appContainer = document.getElementById('root');

if (!appContainer) {
    throw new Error('There must be a node in the HTML with ID "root"');
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , appContainer);
