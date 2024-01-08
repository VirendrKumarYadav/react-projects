import React from 'react'

const Header = () => {

  const filterImage = (e) => {
  console.log(e.terget.value);
  }

  return (
    <div className='font-serif flex flex-row justify-between px-3 py-2 bg-gray-300 items-center' >
          <div>
              <span className='text-2xl font-bold font-sans'>Rishi Translator</span>
      </div>
      
          <div className='flex gap-3'>
              <input placeholder='Search...' className='px-3 rounded-xl' onChange={(e)=>filterImage(e)}></input>
              <button className='rounded-md px-4 py-2 border-green-400 border-2 hover:bg-green-400 '>Search</button>
          </div>
    </div>
  )
}

export default Header
