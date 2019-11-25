import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/rootReducers';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import initialState from './redux/initialState';


const store = createStore(rootReducer, initialState);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
