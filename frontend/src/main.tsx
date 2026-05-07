import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from './components/ui/sonner.tsx';
import { BrowserRouter } from 'react-router-dom';
import { SidebarProvider } from './components/ui/sidebar.tsx';
import './index.css'
import App from './App.tsx'

import {ThemeProvider} from "./components/theme-provider"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme='dark' enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <SidebarProvider>
          <Toaster />
          <App />
        </SidebarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
