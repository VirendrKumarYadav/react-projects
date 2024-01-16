import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import axios from "axios";

const Resturent = () => {
  const fetchAPI = async () => {
    const options = {
      method: "GET",
      url: "https://foodiefetch.p.rapidapi.com/swiggy",
      params: {
        query: "grandamas cafe pune",
      },
      headers: {
        "X-RapidAPI-Key": "468d505f92msh622c8304e993a8ap1403bdjsn61141f902744",
        "X-RapidAPI-Host": "foodiefetch.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAPI();
  });

  const restaurants = [
    {
      id: 1,
      name: "Cuisine Paradise",
      location: "123 Main St, Cityville",
      cuisine: "Italian",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spice Junction",
      location: "456 Oak St, Townsville",
      cuisine: "Indian",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Sushi Haven",
      location: "789 Pine St, Villageland",
      cuisine: "Japanese",
      rating: 4.8,
    },
    {
      id: 1,
      name: "Cuisine Paradise",
      location: "123 Main St, Cityville",
      cuisine: "Italian",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spice Junction",
      location: "456 Oak St, Townsville",
      cuisine: "Indian",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Sushi Haven",
      location: "789 Pine St, Villageland",
      cuisine: "Japanese",
      rating: 4.8,
    },
    {
      id: 1,
      name: "Cuisine Paradise",
      location: "123 Main St, Cityville",
      cuisine: "Italian",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spice Junction",
      location: "456 Oak St, Townsville",
      cuisine: "Indian",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Sushi Haven",
      location: "789 Pine St, Villageland",
      cuisine: "Japanese",
      rating: 4.8,
    },
    {
      id: 1,
      name: "Cuisine Paradise",
      location: "123 Main St, Cityville",
      cuisine: "Italian",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spice Junction",
      location: "456 Oak St, Townsville",
      cuisine: "Indian",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Sushi Haven",
      location: "789 Pine St, Villageland",
      cuisine: "Japanese",
      rating: 4.8,
    },
    {
      id: 1,
      name: "Cuisine Paradise",
      location: "123 Main St, Cityville",
      cuisine: "Italian",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spice Junction",
      location: "456 Oak St, Townsville",
      cuisine: "Indian",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Sushi Haven",
      location: "789 Pine St, Villageland",
      cuisine: "Japanese",
      rating: 4.8,
    },
    {
      id: 1,
      name: "Cuisine Paradise",
      location: "123 Main St, Cityville",
      cuisine: "Italian",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spice Junction",
      location: "456 Oak St, Townsville",
      cuisine: "Indian",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Sushi Haven",
      location: "789 Pine St, Villageland",
      cuisine: "Japanese",
      rating: 4.8,
    },
    // Add more restaurant data as needed
  ];
  return (
    <div>
      <Header />
      <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Featured Restaurants</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
              <p className="text-gray-600 mb-2">
                Location: {restaurant.location}
              </p>
              <p className="text-gray-600 mb-2">
                Cuisine: {restaurant.cuisine}
              </p>
              <p className="text-gray-600 mb-2">Rating: {restaurant.rating}</p>
              {/* You can add more details as needed */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resturent;
