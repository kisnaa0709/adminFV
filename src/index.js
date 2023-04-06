import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import './css/responsive.css';
import './css/bootstrap.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Provider store={store}>  */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>
);

