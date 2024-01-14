import React from 'react'
import About from './componant/About'
import Contect from './componant/contect'
import Food from './componant/Food'
import Home from './componant/Home'
import Resturent from './componant/Resturent'
import Settings from './componant/Settings/Settings'
import Footer from './componant/Footer/Footer'
import Header from './componant/Header/Header'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const App = () => {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contect",
      element: <Contect />,
    },
    {
      path: "/Food",
      element: <Food />,
    },
    {
      path: "/Resturent",
      element: <Resturent />,
    },
    {
      path: "/settings",
      element: <Settings />,
      // children: [
      //   {
      //     path: "/About",
      //     element: <About />,
      //   },
      //   {
      //     path: "/Contect",
      //     element: <Contect />,
      //   },
      //   {
      //     path: "/Food",
      //     element: <Food />,
      //   },
      // ],
    },
  ]);
  // <Header />
  //  <Footer />;
  return (
    <div>
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App
