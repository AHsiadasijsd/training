import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Common/style.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store"

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root')
);

reportWebVitals();
