import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Enables asynchronous actions. Docs here: https://github.com/reduxjs/redux-thunk
const store = createStore(reducer, applyMiddleware(thunk));

const appContainer = document.getElementById('root');
if (!appContainer) {
    throw new Error('There must be a node in the HTML with ID "root"');
}

ReactDOM.render(<App />, appContainer);

{/* <Provider store={store}>
        <App />
    </Provider>, */}