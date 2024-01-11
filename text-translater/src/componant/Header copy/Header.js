import React from 'react'

const Header = () => {

  const filterImage = (e) => {
  console.log(e.terget.value);
  }

  return (
    <div className="font-serif flex flex-row justify-between px-3 py-3 bg-gray-300 items-center">
      <div className="flex gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrqvEDkNYT8EEfwsQ8CgoKLs1vU3SbdXIAg-uXeEU89RddoPE_01rCwQCoGFOPXWTumQ&usqp=CAU"
          className="rounded-full w-10"
        />
        <span className="text-2xl font-bold font-sans text-blue-500 ">
          Rishi Translator
        </span>
      </div>

      <div className="flex gap-3 max-lg:flex-col">
        <input
          placeholder="Search..."
          className="px-2 rounded-xl"
          onChange={(e) => filterImage(e)}
        ></input>
        <button className="rounded-md px-4 max-py-2 border-blue-500  border-2 hover:bg-blue-500  ">
          Search
        </button>
      </div>
    </div>
  );
}

export default Header
