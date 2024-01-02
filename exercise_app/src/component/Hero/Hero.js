import React , { useEffect } from 'react'
import axios from "axios";

const Hero = () => {

     

  return (
    <div className="flex flex-wrap">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 font-sans">
            Sweat today, shine tomorrow
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Sweat now, shine later. Your commitment today is the body you'll
            thank yourself for tomorrow.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://wallpaperaccess.com/full/1087621.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://wallpapercave.com/wp/wp6331008.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
