import React, { useState, useEffect } from "react";
const DataList = () => {
 const [myObject, setMyObject] = useState(null);


 useEffect(() => {
   const storedString = localStorage.getItem("regitered");
   if (storedString) {
     const parsedObject = JSON.parse(storedString);
     setMyObject(parsedObject);
   }
 }, []);
 
  return (
    <div>
      <h1 className="bg-cyan-800 py-2 px-3 text-white font-serif font-bold text-center rounded-sm shadow-2xl">
        Retrieve Datalist
      </h1>
      <div>
        {myObject == null ? (
          "hello there is no Datalist "
        ) : (
            <div> "mapping obj data"+{myObject.map((data,idx) => {
              <p>{data.name}</p> 
          })}</div>
        )}
      </div>
    </div>
  );
}

export default DataList
