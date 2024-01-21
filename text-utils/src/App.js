import "./App.css";
import { createContext, useState } from "react";
import Home from "./Compo/Home";
import About from "./Compo/About";
import Contect from "./Compo/Contect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Compo/Footer";
import Header from "./Compo/Header";
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
export const BoardDetails = createContext();
export const SetBoardDetails = createContext();


const TYPE = {
  UPPER: "uppercase",
  LOWER: "lowercase",
  CLEAR: "clear",
  COPYTOCLIP: "copy",
  REMOVE_SP: "remove",
  SAVE: "save",
};

const toasterReducer = (type) => {
  switch (type) {
    case TYPE.UPPER:
      toast.success("Yup! converted UPPERCASE Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    case TYPE.LOWER:
      toast.success("🦄 Wow so easy! Converted LOWERCASE Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    case TYPE.CLEAR:
      toast.info("🦄 Cleard!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    case TYPE.COPYTOCLIP:
      toast.info("Copied!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    case TYPE.REMOVE_SP:
      toast.success("Space Removed!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
  }
};

function App() {
  const [noOfChar, setNoOfChar] = useState(0);
  const [noOfWord, setNoOfWord] = useState(0);

  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Header />
          <About />
          <Footer />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Header />
          <Contect />
          <Footer />
        </div>
      ),
    },
  ]);



  const reducer = (state, action) => {
    switch (action.type) {
      case TYPE.UPPER:
        toasterReducer(TYPE.UPPER);

        return state.toUpperCase();
      case TYPE.LOWER:
        toasterReducer(TYPE.LOWER);
        return state.toLowerCase();
      case TYPE.SAVE:
        setNoOfChar(action.innerText.length);
        setNoOfWord(action.innerText.split(" ").length);
        return action.innerText;
      case TYPE.CLEAR:
        toasterReducer(TYPE.CLEAR);
        return (state = "");
      case TYPE.COPYTOCLIP:
        toasterReducer(TYPE.COPYTOCLIP);
        navigator.clipboard.writeText(state);
        return state;
      case TYPE.REMOVE_SP:
        toasterReducer(TYPE.REMOVE_SP);
        return state.replace(/\s+/g, " ");
      default:
        return state;
    }
  };

  return (
    <BoardDetails.Provider value={[TYPE, reducer, noOfChar, noOfWord]}>
      <RouterProvider router={route}>
        
       
      </RouterProvider>
      <ToastContainer />
    </BoardDetails.Provider>
  );
}

export default App;
