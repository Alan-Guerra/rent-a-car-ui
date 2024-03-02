import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Catalog } from './components/Catalog.tsx'

const router = createBrowserRouter([
  {
    element: <Catalog />,
    path: "/catalog",
  },
  {
    element: <App />,
    path: "/",
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
  
)
