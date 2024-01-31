import React from 'react'
import logoImage from '../../assets/circle.png'

const Header = () => {


    
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logoImage} alt="Logo" className="w-10 h-10 mr-2 rounded-md" />
        <h1 className="text-xl font-bold">Invoice Generator</h1>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Button
      </button> 
    </header>
  );
}

export default Header
