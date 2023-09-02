import App from './App'
import React from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './UserContext'

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <App/>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>,
)

reportWebVitals();