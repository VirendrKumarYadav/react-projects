import React, { useState, useEffect } from "react";
const DataList = () => {
  const [myObject, setMyObject] = useState(JSON.parse(localStorage.getItem("regitered")));

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
          " hello there is no Datalist "
        ) : (
          <div className="flex flex-row justify-between font-serif text-xl py-1">
            <p>Name :-{myObject.name}</p>
            <p>Age:-{myObject.age}</p>
            <p>Adhar :- {myObject.adhar}</p>
            <p>Mobile No :-{myObject.mobile}</p>
            <p>DOB :-{myObject.dob}</p>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default DataList;
