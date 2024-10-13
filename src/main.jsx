import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/Router.jsx'
import ContextAPI from './components/contextAPI/ContextAPI.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextAPI>
   <RouterProvider router={router} />
   </ContextAPI> 
  </StrictMode>,
)
