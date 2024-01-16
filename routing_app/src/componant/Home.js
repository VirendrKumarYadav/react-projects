import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './Home.css';


const Home = () => {
  return (
    <div>
      <Header />

      <div>
        <div class="hero">
          <div class="container">
            <h1 class="text-4xl md:text-6xl font-bold text-center">
              Welcome to our <span className="font-serif">RISHIYAM</span>
            </h1>
          </div>
        </div>

        <div class="container">
          <div class="features flex gap-3">
            <div class="feature flex justify-center flex-col">
              <img
                src="https://images.unsplash.com/photo-1615719413546-198b25453f85?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                alt="Feature 1"
                className="max-h-96 rounded-full max-w-96"
              />
              <h2 class="text-xl font-semibold mt-4 text-rose-400">PIZZA</h2>
              <p>
                It typically consists of a flat, round crust topped with tomato
                sauce, cheese, and various toppings, which can include
                vegetables, meats, and herbs. The pizza is then baked in an
                oven, resulting in a delicious and versatile meal.
              </p>
            </div>
            <div class="feature flex justify-center flex-col">
              <img
                src="https://images.unsplash.com/photo-1611309454921-16cef3438ee0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                alt="Feature 2"
                className="max-h-96 rounded-full max-w-96"
              />
              <h2 class="text-xl font-semibold mt-4 text-rose-400">BURGER</h2>
              <p>
                usually beef, which is typically grilled or fried, served in a
                sliced bun or roll. Burgers are often customized with various
                toppings, condiments, and accompaniments, making them a
                versatile and widely enjoyed fast food or casual dining option.
              </p>
            </div>
            <div class="feature flex justify-center flex-col">
              <img
                src="https://plus.unsplash.com/premium_photo-1663852706098-c2aae47c5ebb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                alt="Feature 3"
                className="max-h-96 rounded-full max-w-96"
              />
              <h2 class="text-xl font-semibold mt-4 text-rose-400">
                GREEN SALAD
              </h2>
              <p>
                A green salad is a dish consisting primarily of fresh, raw
                vegetables and leafy greens. It's a versatile and healthy option
                that can be customized with various ingredients. Here are some
                key features of a typical green salad.
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
