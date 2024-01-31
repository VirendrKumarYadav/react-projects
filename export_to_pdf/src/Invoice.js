import React from "react";

const Invoice = ({ invoiceData }) => {
  return (
    <div>
      {/* Your invoice content goes here */}
      <h1>Invoice</h1>
      <p>{invoiceData.customerName}</p>
      {/* ... other invoice details */}
    </div>
  );
};

export default Invoice;
