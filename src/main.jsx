import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './Components/utils/globalcontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </BrowserRouter>
);
