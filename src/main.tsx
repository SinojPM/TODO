import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { MantineProvider } from '@mantine/core'
import AuthContext from './context/AuthContext.tsx'
import { Provider } from 'react-redux'
import Store from './Redux/Store.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContext>
      <BrowserRouter>
        <MantineProvider >
          <Provider store={Store}><App /></Provider>
        </MantineProvider>
      </BrowserRouter>
    </AuthContext>
  </StrictMode>,
)
