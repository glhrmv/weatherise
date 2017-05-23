import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'nprogress/nprogress.css';
import 'bulma/css/bulma.css';
import 'normalize.css';

import './index.css';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
