
import './index.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Panel } from 'Panel';

const renderPage = (component) => {
  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Panel />
      </BrowserRouter>
    </React.StrictMode>
  );
}


renderPage();
