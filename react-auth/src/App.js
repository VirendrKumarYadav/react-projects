import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./compo/LoginPage";
import Signup from "./compo/Signup";
import AuthProvider from "./compo/AuthProvider";
import firebase from './firebase'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router}>
        <ToastContainer />
      </RouterProvider>
    </AuthProvider>
  );
}

export default App;
