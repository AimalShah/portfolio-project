import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import Router from "./Router"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark'>
      <Router/>
    </ThemeProvider>
  </React.StrictMode>,
)
