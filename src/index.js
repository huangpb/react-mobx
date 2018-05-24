import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'mobx-react'
import RootRouter from './router';
import store from './store'



const render = (App) => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
};

render(RootRouter);

if(module.hot) {
    module.hot.accept('./router', () => {
        render(require('./router').default)
    })
}


