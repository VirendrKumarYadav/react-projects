import React,{useReducer,useContext,useState} from 'react'
import { BoardDetails } from "../App";

const Home = () => {
    const prop = useContext(BoardDetails)
    const TYPE = prop[0];
  const reducer = prop[1];
  const noOfChar = prop[2];
  const noOfWord = prop[3];
  
   const innerText = "";
   const [state, dispatched] = useReducer(reducer, innerText);
    
 

  return (
    <div className="home_section flex flex-col items-center justify-center gap-6 py-3">
      <textarea
        cols="100"
        rows="10"
        type="text"
        className="p-4 font-serif"
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
        <div className="flex flex-row gap-4 justify-center font-mono font-bold">
          <div>
            No. Of Chars : <span>{noOfChar}</span>
          </div>
          <div>
            No. Of words : <span>{noOfWord}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  flex-col flex-wrap max-w-2xl max-md:w-3/4">
        <textarea
          cols="100"
          rows="7"
          type="text"
          className="p-5 font-serif"
          value={state}
        ></textarea>
      </div>
    </div>
  );
}

export default Home
