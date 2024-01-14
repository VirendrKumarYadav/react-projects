import React, { useState } from "react";
import Button from "./Button";
import AddNewData from "./AddNewData";
import Register from "./RegisterList";

const Body = () => {
  const [addbtnClk, setAddBtnClk] = useState(false);
  const [retrieveClk, setRetrieveClk] = useState(false);
  const [uidataToggle, setuidataToggle] = useState(false);

  const addNewTab = () => {
    setuidataToggle(false)
  };
  
  const retrieveClk_fun = () => {
        setuidataToggle(true);
  };

  return (
    <div>
      <div className="py-3 flex gap-3 px-7 justify-center">
        <Button name="Add New button" onclickBtn={addNewTab}></Button>
        <Button
          name="Retrieve Information"
          onclickBtn={retrieveClk_fun}
        ></Button>

      </div>

      <div className="p-8 border-dotted border-2 border-blue-400 bg-cyan-200">
        { !uidataToggle ? <AddNewData /> : <Register/>}
      </div>
    </div>
  );
};

export default Body;
