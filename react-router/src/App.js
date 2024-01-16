import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './compo/Home'
import About from './compo/About'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <div>
     < RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

