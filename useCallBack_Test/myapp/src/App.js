import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useContext,useState} from "react"
import ContextUser from './compoonant/contextDemo';
import { ContextData } from './compoonant/Context/ContextData';

function App() {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    add:""
  })

  const route = createBrowserRouter([
    {
      path: "/",
      element: <ContextUser/>,
    },
  ]);

  return (
    <div className="App">
      <ContextData.Provider value={{ user,setUser } }>
        <RouterProvider router={route} />
      </ContextData.Provider>
    </div>
  );
}

export default App;
