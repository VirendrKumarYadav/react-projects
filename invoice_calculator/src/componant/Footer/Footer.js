import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">Developed by Virendra</p>
          <p>Additional content in the footer...</p>
        </div>
        <p className="font-light text-sm">
          © {new Date().getFullYear()} Invoice Generator
        </p>
      </div>
    </footer>
  );
}

export default Footer
