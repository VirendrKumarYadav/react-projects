import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './compo/Home'
import Data from './compo/RegisterList'

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Data />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={route}>
      
      </RouterProvider>
    </div>
  )
}

export default App
