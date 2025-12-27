import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient , QueryClientProvider } from '@tanstack/react-query'
import {BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'


const test = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={test}>
      <StrictMode>
        
        <App />
      </StrictMode>
    </QueryClientProvider>
  </BrowserRouter>
)
