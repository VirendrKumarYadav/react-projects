import React,{useReducer,useContext
} from 'react'
import { BoardDetails } from "../App";

const Home = () => {
    const prop = useContext(BoardDetails)
    const TYPE = prop[0];
    const reducer=prop[1];
  
   const innerText = "";
   const [state, dispatched] = useReducer(reducer, innerText);
    

  return (
    <div>
      <textarea
        cols="50"
        rows="10"
        type="text"
    
        onChange={(e) =>
          dispatched({ type: TYPE.SAVE, innerText: e.target.value })
        }
      ></textarea>

      <div>
        <button onClick={() => dispatched({ type: TYPE.UPPER })}>
          UPPERCASE
        </button>
        <button
          onClick={() => {
            dispatched({ type: TYPE.LOWER });
          }}
        >
          LOWERCASE
        </button>
        <button
          onClick={() => {
            dispatched({ type: TYPE.CLEAR });
          }}
        >
          CLAER TEXT
        </button>
        <button
          onClick={() => {
            dispatched({ type: TYPE.COPYTOCLIP });
          }}
        >
          COPY TO CLIPBOARD
        </button>
        <button
          onClick={() => {
            dispatched({ type: TYPE.REMOVE_SP });
          }}
        >
          REMOVE EXTREA SPACES
        </button>

        <textarea value={state}></textarea>
      </div>
    </div>
  );
}

export default Home
