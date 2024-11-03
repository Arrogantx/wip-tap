import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <ParallaxProvider>
          <Toaster position="top-right" />
          <App />
        </ParallaxProvider>
      </BrowserRouter>
    </StrictMode>
  );
}