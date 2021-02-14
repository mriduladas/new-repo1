import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App  appTitle="Hi, This is the first React App1" />, document.getElementById('root'));
registerServiceWorker();
