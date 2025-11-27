import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Cela fait le lien avec votre fichier App.tsx visible à gauche
import './index.css';  // <--- C'EST CETTE LIGNE QUI MANQUE !

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Impossible de trouver l\'élément racine');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
