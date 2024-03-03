import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Catalog } from './routes/Catalog.tsx'
import { Car } from './components/Car.tsx'
import { Rent } from './components/Rent.tsx'
import { Settings } from './components/Settings.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <Catalog />,
    path: "/catalog",
  },
  {
    element: <Car />,
    path: "/car",
  },
  {
    element: <Rent />,
    path: "/rent",
  },
  {
    element: <Settings />,
    path: "/settings",
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
  
)
