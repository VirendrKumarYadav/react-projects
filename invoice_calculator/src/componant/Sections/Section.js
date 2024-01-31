import React from "react";
import { useState, useReducer, useEffect } from "react";
import { createContext, useContext, } from "react";
import { Navigate } from "react-router-dom";

const invoiceContext = createContext();

export function useInvoiceData() {
  return useContext(invoiceContext);
}


const TYPE = {
  TITLE: "title",
  RATE: "rate",
  QUANTITY: "quantity",
  TAX: "tax",
};
const total = 0;
const taxAdded = 0;

const Section = () => {
  const [totalAmt, setTotalAmt] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [taxAmt, setTaxAmt] = useState(0);
  const [title, setTitle] = useState(0);
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [tax, setTax] = useState(0);
  const [balance, setBalance] = useState(2000.0);
  const [balanceDue, setBalanceDue] = useState(0.0);

  
  const input_reducer = (type, value) => {
    switch (type) {
      case TYPE.TITLE:
        setTitle(value);
        return;
      case TYPE.RATE:
        setRate(parseInt(value));
        return;
      case TYPE.QUANTITY:
        setQuantity(parseInt(value));
        return;
      case TYPE.TAX:
        setTax(parseInt(value));
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    setSubTotal(rate * quantity);
    setTaxAmt((subTotal * tax) / 100);
    setTotalAmt(subTotal + taxAmt);
    setBalance(
         balance >= subTotal + taxAmt
        ? balance - subTotal + taxAmt
        : setBalanceDue((subTotal + taxAmt) - balance)
    );
    setBalanceDue(
      balance >= subTotal + taxAmt
        ? setBalanceDue(0)
        : setBalanceDue((subTotal + taxAmt)-balance)
    );

  }, [rate, tax, quantity]);

  const handleInvoiccePDFRequest = () => {
     <Navigate to="/invoice" replace={true} />;
 }

  return (
    <main>
      <div className="py-6 text-2xl font-bold font-sans">
        Invoice Calculator
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-5  gap-2 bg-gray-300 mx-40 border border-gray-200/25 rounded-md">
          <div className="border border-gray-200/25 p-2">DESCRIPTION</div>
          <div className=" p-2">RATE, USD</div>
          <div className=" p-2">QTY/HRS</div>
          <div className=" p-2">TAX</div>
          <div className=" p-2">AMOUNT, USD</div>
        </div>

        <div className="grid grid-cols-5 gap-2   mx-40  rounded-lg">
          <div>
            <input
              className="border-gray-200 border-2 rounded-lg px-3 py-2 font-mono text-lg"
              placeholder="Title"
              onChange={(e) => input_reducer(TYPE.TITLE, e.target.value)}
            />
          </div>
          <div>
            <input
              className=" border-gray-200 border-2 w-28 rounded-lg px-3 py-2 text-end font-mono text-lg"
              type="number"
              placeholder="0.0"
              onChange={(e) => input_reducer(TYPE.RATE, e.target.value)}
            />
          </div>
          <div>
            <input
              className=" border-gray-200 border-2 w-28 rounded-lg px-3 py-2 text-end font-mono text-lg"
              type="number"
              placeholder="0.0"
              onChange={(e) => input_reducer(TYPE.QUANTITY, e.target.value)}
            />
          </div>
          <div>
            <input
              className="border-gray-200 border-2 w-28 rounded-lg px-1 py-2 text-end font-mono text-lg"
              type="number"
              placeholder="0.0%"
              onChange={(e) => input_reducer(TYPE.TAX, e.target.value)}
            />
          </div>
          <div>{subTotal + taxAmt === 0 ? "0.0" : subTotal + taxAmt}</div>
        </div>
      </div>
      <div className=" text-start mx-40 my-3 flex gap-4">
        <button className=" bg-green-500 text-white px-4 py-2 rounded font-mono font-bold hover:text-green-500 hover:bg-white hover:border-2 hover:border-dashed">
          +New Item
        </button>
        <button
          className="border-2 border-dashed text-green-500 px-4 py-2 rounded font-mono font-bold hover:text-white hover:bg-green-500
        "
        >
          Clear All
        </button>
      </div>
      <hr></hr>
      <div className="flex flex-row justify-between mx-40 my-3">
        <div className="left">
          <button
            onClick={handleInvoiccePDFRequest}
            className=" bg-green-500 text-white px-4 py-2 rounded font-mono font-bold hover:text-green-500 hover:bg-white hover:border-2 hover:border-dashed">
            Transfer Data To Invoice Generator
          </button>
        </div>
        <div className="right min-w-96 font-mono font-bold text-gray-600">
          <div className="flex justify-between">
            <label>Subtotal</label>
            <p>
              ${subTotal}
              <span>.0</span>{" "}
            </p>
          </div>
          <div className="flex justify-between">
            <label>Taxes</label>
            <p>
              $<span>{taxAmt === 0 ? "0.0" : taxAmt}</span>{" "}
            </p>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <label>Balance </label>
            <p>
              ${balance}
              <span>.0</span>{" "}
            </p>
          </div>
          <div className="flex justify-between">
            <label>Balance Due </label>
            <p>
              ${}
              <span>
                {balanceDue == 0 || balanceDue==undefined
                  ? "0.0"
                  : balanceDue}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section;
