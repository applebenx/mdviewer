import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { MainView } from './mainview'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
)
