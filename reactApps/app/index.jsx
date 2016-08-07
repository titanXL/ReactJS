import '../build/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

require('bootstrap-loader')
ReactDOM.render(<App />, document.getElementById('app'));