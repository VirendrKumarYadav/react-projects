import { createContext } from "react";
import Home from './Compo/Home'

export const BoardDetails = createContext();
export const SetBoardDetails = createContext();

const TYPE = {
  UPPER: "uppercase",
  LOWER: "lowercase",
  CLEAR: "clear",
  COPYTOCLIP: "copy",
  REMOVE_SP: "remove",
  SAVE:"save",
};

const reducer = (state,action) => {
  switch (action.type) {
    case TYPE.UPPER:
      return state.toUpperCase();
    case TYPE.LOWER:
     return state.toLowerCase();
    case TYPE.SAVE:
     return action.innerText;
    case TYPE.CLEAR:
      return state = "";
    case TYPE.COPYTOCLIP:
       navigator.clipboard.writeText(state);
      return state;
    case TYPE.REMOVE_SP:
      return state.replace(/\s+/g, " ");
    default: 
      return state;
  }
};


function App() {

 
  return (
    <BoardDetails.Provider value={[TYPE,reducer]}>
     
        <Home red={reducer} TYPE={TYPE} />

    </BoardDetails.Provider>
  );
}

export default App;
