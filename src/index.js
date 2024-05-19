import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,HashRouter  } from 'react-router-dom';
import App from './App';
import 'antd-mobile/es/global'
import './index.css'

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <HashRouter>
      <App />
    </HashRouter>
  )
}
