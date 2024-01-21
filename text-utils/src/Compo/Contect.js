// Contacts.js

import React from "react";

const Contacts = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Contact Us</h1>
        <p className="text-gray-700">
          If you have any questions or inquiries, feel free to reach out to us:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Email: {" "}Softech.vire@gmail.com</li>
          <li>Phone: + (91) 8149535304</li>
          <li>Address: 22, Borivali,Mumbai, Maharastra, 110094</li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
