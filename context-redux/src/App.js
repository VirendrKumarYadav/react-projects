import './App.css';
import { useContext,createContext } from 'react'
import FirstChild from './compo/FirstChild';
import {Provider} from 'react-redux'
import { store } from '../src/redux/store'
import { fetchApi } from './api/api';
//-----Checking the Context ---Part of API

const dataProvider = createContext({})
export function useDataProvider() {
  return useContext(dataProvider);
}

function App() {
  fetchApi("https://api.themoviedb.org/3/account/20849696", {})
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

  const nameList = [
  
    {
      name: 'virendra',
      age: '20 ',
      pass:true,
    },
    {
      name: 'raju',
      age: '22 ',
      pass:false,
    },
    {
      name: 'Rampati',
      age: '28 ',
      pass:true,
    },
    {
      name: 'Vinod',
      age: '30 ',
      pass:true,
    }
]



  return (
    <Provider store={store}>
      <dataProvider.Provider value={nameList}>
        <h1>This is the app.js file</h1>
        <FirstChild />
      </dataProvider.Provider>
    </Provider>
  );
}

export default App;
