import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import Store from './mobxStore'

const AppTheme = new Store();
ReactDOM.render(<Provider store={AppTheme}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
