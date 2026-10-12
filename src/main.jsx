import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights()

createRoot(document.getElementById('root')).render(<App />)
