import React from 'react'
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Food = () => {

   const foodItems = [
     {
       id: 1,
       name: "Margherita Pizza",
       description: "Classic pizza with tomato, mozzarella, and basil.",
       price: "$12.99",
     },
     {
       id: 2,
       name: "Grilled Salmon",
       description: "Freshly grilled salmon with lemon and herbs.",
       price: "$18.99",
     },
     {
       id: 3,
       name: "Pasta Carbonara",
       description: "Spaghetti with creamy carbonara sauce and bacon.",
       price: "$14.99",
     },
     {
       id: 4,
       name: "Vegetarian Sushi Roll grilled",
       description: "Delicious sushi roll with avocado, cucumber, and carrot.",
       price: "$13.99",
     },
     {
       id: 1,
       name: "Margherita Pizza grilled",
       description: "Classic pizza with tomato, mozzarella, and basil.",
       price: "$14.99",
     },
     {
       id: 2,
       name: "Grilled Salmon grilled",
       description: "Freshly grilled salmon with lemon and herbs.",
       price: "$20.99",
     },
     {
       id: 3,
       name: "Pasta Carbonara grilled",
       description: "Spaghetti with creamy carbonara sauce and bacon.",
       price: "$18.99",
     },
     {
       id: 4,
       name: "Vegetarian Sushi Roll grilled",
       description: "Delicious sushi roll with avocado, cucumber, and carrot.",
       price: "$19.99",
     },
     {
       id: 1,
       name: "Margherita Pizza chees",
       description: "Classic pizza with tomato, mozzarella, and basil.",
       price: "$15.99",
     },
     {
       id: 2,
       name: "Grilled Salmon chees",
       description: "Freshly grilled salmon with lemon and herbs.",
       price: "$28.99",
     },
     {
       id: 3,
       name: "Pasta Carbonara chees",
       description: "Spaghetti with creamy carbonara sauce and bacon.",
       price: "$24.99",
     },
     {
       id: 4,
       name: "Vegetarian Sushi Roll chees",
       description: "Delicious sushi roll with avocado, cucumber, and carrot.",
       price: "$29.99",
     },
     {
       id: 1,
       name: "Margherita Pizza chees and grilled",
       description: "Classic pizza with tomato, mozzarella, and basil.",
       price: "$52.99",
     },
     {
       id: 2,
       name: "Grilled Salmon chees and grilled",
       description: "Freshly grilled salmon with lemon and herbs.",
       price: "$58.99",
     },
     {
       id: 3,
       name: "Pasta Carbonara chees and grilled",
       description: "Spaghetti with creamy carbonara sauce and bacon.",
       price: "$44.99",
     },
     {
       id: 4,
       name: "Vegetarian Sushi Roll chees and grilled",
       description: "Delicious sushi roll with avocado, cucumber, and carrot.",
       price: "$59.99",
     },
     {
       id: 1,
       name: "Margherita Pizza chees and grilled",
       description: "Classic pizza with tomato, mozzarella, and basil.",
       price: "$62.99",
     },
     {
       id: 2,
       name: "Grilled Salmon",
       description: "Freshly grilled salmon with lemon and herbs.",
       price: "$18.99",
     },
     {
       id: 3,
       name: "Pasta Carbonara",
       description: "Spaghetti with creamy carbonara sauce and bacon.",
       price: "$14.99",
     },
     {
       id: 4,
       name: "Vegetarian Sushi Roll",
       description: "Delicious sushi roll with avocado, cucumber, and carrot.",
       price: "$9.99",
     },
     {
       id: 1,
       name: "Margherita Pizza",
       description: "Classic pizza with tomato, mozzarella, and basil.",
       price: "$12.99",
     },
     {
       id: 2,
       name: "Grilled Salmon",
       description: "Freshly grilled salmon with lemon and herbs.",
       price: "$18.99",
     },
     {
       id: 3,
       name: "Pasta Carbonara",
       description: "Spaghetti with creamy carbonara sauce and bacon.",
       price: "$14.99",
     },
     {
       id: 4,
       name: "Vegetarian Sushi Roll",
       description: "Delicious sushi roll with avocado, cucumber, and carrot.",
       price: "$9.99",
     },
   ];
  
  return (
    <div>
      <Header />
      <div className='food_bg'></div>
      <div className='flex justify-center flex-row items-center gap-6 my-3'>
        <label className='font-serif font-bold'>Filter: </label>
        <input className='py-4 px-4 text-rose-400' placeholder='Serach your meal here...'></input>
      </div>
      <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Explore Our Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((food) => (
            <div key={food.id} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
              <p className="text-gray-600 mb-2">{food.description}</p>
              <p className="text-green-500 font-bold">{food.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Food
