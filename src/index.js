import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import Life from '../src/pages/demo/Life';
import Admin from './admin'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();
