import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { MantineProvider } from '@mantine/core'
import AuthContext from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContext>
      <BrowserRouter>
        <MantineProvider >
          <App />
        </MantineProvider>
      </BrowserRouter>
    </AuthContext>
  </StrictMode>,
)
