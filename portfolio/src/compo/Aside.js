import React from 'react'
import profileImg from './pick.png'

const Aside = () => {
  return (
    <div className="bg-cyan-600 min-w-64 min-h-96 my-9 p-6 rounded-xl ">
      <div className="flex flex-col justify-center items-center my-4 gap-3 ">
        <img src={profileImg} className="rounded-lg h-20 w-20 bg-white"></img>
        <p className="font-extrabold text-yellow-50"> Virendra Yadav</p>
        <label className="font-serif  bg-black  text-yellow-500 px-3 rounded-lg hover:text-black hover:bg-yellow-300  pointer-events-auto border-slate-600 shadow-2xl hover:opacity-80">
          Hello World !
        </label>
      </div>
      <hr className="bg-black "></hr>
      <div className="p-4">
        <ul className="flex flex-col justify-center  gap-3">
          <li className="flex flex-row items-center  gap-9">
            <span class="material-symbols-outlined bg-black text-yellow-500 p-3 rounded-lg">
              hourglass_top
            </span>
            <div className="flex flex-col font-serif" id="font">
              <h4 className="uppercase font-serif text-sm" id="font">
                Age
              </h4>
              <p>25 year old</p>
            </div>
          </li>
          <li className="flex flex-row items-center  gap-9">
            <span class="material-symbols-outlined bg-black text-yellow-500 p-3 rounded-lg">
              location_on
            </span>
            <div className="flex flex-col font-serif" id="font">
              <h4 className="uppercase  ">Location</h4>
              <p>Delhi,India</p>
            </div>
          </li>
          <li className="flex flex-row items-center gap-9 font-serif">
            <span class="material-symbols-outlined bg-black text-yellow-500 p-3 rounded-lg">
              person
            </span>
            <div className="flex flex-col font-serif" id="font">
              <h4 className="uppercase text-sm">Personility Type</h4>
              <p>Simple</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center gap-4">
          <li>
            <a href="https://www.instagram.com/im_vireoff/">
              <i class="fa-brands fa-instagram text-2xl hover:text-yellow-200"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/VirendrKumarYadav">
              <i class="fa-brands fa-github text-2xl hover:text-yellow-200"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/virendra-yadav-446894227/">
              <i class="fa-brands fa-linkedin text-2xl hover:text-yellow-200"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Im_viroff?t=F5EvBMtZuUbBDGZptg1Qdg&s=09">
              <i class="fa-brands fa-twitter text-2xl hover:text-yellow-200"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside
