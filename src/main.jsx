import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/input.css'
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
