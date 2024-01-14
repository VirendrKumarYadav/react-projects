import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewData = () => {
  const [addbtnClk, setAddBtnClk] = useState(false);
  const [dataToStore, setDataToStore] = useState(
    {
      name:"",
      dob:"",
      adhar:"",
      mobile:"",
      age:"",
    },
  );

  useEffect(() => {
    console.log(dataToStore);
  }, []);

  // onchange input
  const onChangeReducer = (type, value) => {
    switch (type) {
      case "name":
        setDataToStore((dataToStore.name = value));
        break;
      case "dob":
        setDataToStore((dataToStore.dob = value));
        break;
      case "adhar":
        setDataToStore((dataToStore.adhar = value));
        break;
      case "mobile":
        setDataToStore((dataToStore.mobile = value));
        break;
      case "age":
        setDataToStore((dataToStore.age = value));
        break;
    }
  };

  // save the data
  const saveData = () => {
    let type = "error";
    let setTypeOfErrorValue = "Oops! Any field should not be empty";
   console.log(dataToStore);
    if (dataToStore.name =="") {
      setTypeOfErrorValue = "Oops! Name field should not be empty";
    } else if (dataToStore.dob == "") {
      setTypeOfErrorValue = "Oops! DOB field should not be empty";
    } else if (dataToStore.adhar == "" || dataToStore.adhar.length != 12) {
      setTypeOfErrorValue = "”Aadhar Number” should be of 12 digits";
    } else if (dataToStore.mobile == "" || dataToStore.mobile.length != 10) {
      setTypeOfErrorValue = "”Mobile Number” should be of 10 digits";
    } else if (dataToStore.age == "") {
      setTypeOfErrorValue = "Oops! Age field should not be empty";
    } else {
      type = "success";
    }

    switch (type) {
      case "success":
        toast.success("This is a success toast!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        const jsonString = JSON.stringify(dataToStore);
        
        localStorage.setItem(
          "regitered",
          jsonString
        );
        break;
      
      case "error":
        toast.error(setTypeOfErrorValue, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log("Success");
        break;
      default:
        break;
    }
  };
  // delete the old data
  const deleteData = () => {
    setAddBtnClk(true);
  };

  //  input value
  const addInputFull = () => {
    const divCont = document.createElement("div");
    divCont.id = "container";
    divCont.className = `p-3 flex justify-between max-lg:flex-col max-lg:flex-wrap`;
    // divCont.style.display = !addbtnClk?"inline ":"none";
    //name
    var newElement = document.createElement("input");
    newElement.placeholder = "Name";
    newElement.style.padding = "10px";
    newElement.style.border = "1px solid black";
    newElement.type = "text";
    newElement.addEventListener("change", (e) =>
      onChangeReducer("name", e.target.value)
    );
    // dob
    var newElementDob = document.createElement("input");
    newElementDob.style.padding = "10px";
    newElementDob.style.border = "1px solid black";
    newElementDob.type = "date";
    var container = document.getElementById("container");
    newElementDob.addEventListener("change", (e) =>
      onChangeReducer("dob", e.target.value)
    );
    // Adhar
    var newElementAdhar = document.createElement("input");
    newElementAdhar.placeholder = "Adhar Number !";
    newElementAdhar.style.padding = "10px";
    newElementAdhar.style.width = "250px";
    newElementAdhar.style.border = "1px solid black";
    newElementAdhar.type = "number";
    newElementAdhar.maxLength = "12";
    newElementAdhar.addEventListener("change", (e) =>
      onChangeReducer("adhar", e.target.value)
    );

    // Mobile
    var newElementMobile = document.createElement("input");
    newElementMobile.placeholder = "Mobile Number !";
    newElementMobile.style.padding = "10px";
    newElementMobile.style.border = "1px solid black";
    newElementMobile.style.width = "250px";
    newElementMobile.type = "number";
    newElementMobile.maxLength = "10";
    newElementMobile.addEventListener("change", (e) =>
      onChangeReducer("mobile", e.target.value)
    );
    //Age
    var newElementAge = document.createElement("input");
    newElementAge.placeholder = "Age!";
    // newElementAge.style.textAlign = "center";
    newElementAge.style.padding = "10px";
    newElementAge.style.border = "1px solid black";
    newElementAge.type = "number";
    newElementAge.addEventListener("change", (e) =>
      onChangeReducer("age", e.target.value)
    );
    // save
    var newElementSave = document.createElement("button");
    newElementSave.style.padding = "5px 5px";
    newElementSave.style.border = "1px solid black";
    newElementSave.innerText = "Save";
    newElementSave.style.color = "#00cc00";
    newElementSave.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    newElementSave.style.fontWeight = "bold";
    newElementSave.addEventListener("click", saveData);
    // delete
    // var newElementDel = document.createElement("button");
    // newElementDel.style.padding = "5px 5px";
    // newElementDel.style.border = "1px solid black";
    // newElementDel.style.color = "Red";
    // newElementDel.innerText = "Delete";
    // newElementDel.style.fontWeight = "bold";
    // newElementDel.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    // newElementDel.addEventListener("click", deleteData);
    // appends
    var container = document.getElementById("conta");
    divCont.appendChild(newElement);
    divCont.appendChild(newElementDob);
    divCont.appendChild(newElementAdhar);
    divCont.appendChild(newElementMobile);
    divCont.appendChild(newElementAge);
    divCont.appendChild(newElementSave);
    // divCont.appendChild(newElementDel);
    container.appendChild(divCont);
    setAddBtnClk(true);
  };

  return (
    <div>
      <h1 className="bg-cyan-800 py-2 px-3 text-white font-serif font-bold text-center rounded-sm shadow-2xl">
        Add New Person
      </h1>
      <div className="flex justify-center font-sans gap-2 bg-cyan-500 text-white font-bold py-2 px-7 flex-wrap w-full ">
        <div className="flex justify-between font-sans bg-cyan-500 text-white font-bold w-full max-lg:flex-col">
          <div>Name</div>
          <div>Date Of Birth</div>
          <div>Adhar Number</div>
          <div>Mobile Number</div>
          <div>Age</div>
          <div>Actions</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          id="conta"
          className="p-3 flex justify-between max-lg:flex-col max-lg:flex-wrap flex-col"
        ></div>
      </div>

      {!addbtnClk ? (
        <button className="px-4 py-2 bg-cyan-500" onClick={addInputFull}>
          Add
        </button>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
};

export default AddNewData;
