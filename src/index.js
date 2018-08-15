import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { TalesStore } from './stores';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';

/*
*   Configuring MobX
*/
configure({
    enforceActions: true
});

const stores = (window.mobxStores = {
    tales: TalesStore
});

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
