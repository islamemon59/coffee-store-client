import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { FiCoffee } from "react-icons/fi";
import Banner from "../Component/Banner";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
  console.log(coffees);
  return (
    <div>
      <Banner></Banner>
      <div className="bg-base-200">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-12 max-w-7xl mx-auto px-4">
          <div className="space-y-3">
            <img src="icons/1.png" alt="icon-1" />
            <h2 className="text-4xl rancho text-primary">Awesome Aroma</h2>
            <p className="text-secondary">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-3">
            <img src="icons/2.png" alt="icon-2" />
            <h2 className="text-4xl rancho text-primary">High Quality</h2>
            <p className="text-secondary">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="space-y-3">
            <img src="icons/3.png" alt="icon-3" />
            <h2 className="text-4xl rancho text-primary">Pure Grades</h2>
            <p className="text-secondary">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="space-y-3">
            <img src="icons/4.png" alt="icon-4" />
            <h2 className="text-4xl rancho text-primary">Proper Roasting</h2>
            <p className="text-secondary">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[url(more/1.png)] bg-no-repeat my-20">
        <div className="flex flex-col justify-center items-center py-10">
          <h3 className="text-center">--- Slip & Savor ---</h3>
          <h1 className="text-[55px] rancho text-center text-primary">
            Our Popular Products
          </h1>
          <Link to="/addCoffee">
            <button className="btn text-2xl bg-base-300 hover:bg-base-200 text-base-200 hover:text-primary border-2 border-primary rounded-sm rancho">
              Add Coffee <FiCoffee className="text-primary" />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></CoffeeCard>
          ))}
        </div>
        <div className="mt-20">
          <div className="text-center py-6">
            <p
              className="
            text-accent"
            >
              Follow Us Now
            </p>
            <h1 className="text-[55px] text-primary rancho">
              Follow on Instagram
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-5 max-w-6xl mx-auto justify-center">
            <img
              className="w-full object-cover transition duration-600 hover:scale-105"
              src="cups/Rectangle 9.png"
              alt="cups"
            />
            <img
              className="w-full object-cover transition duration-600 hover:scale-105"
              src="cups/Rectangle 10.png"
              alt="cups"
            />
            <img
              className="w-full object-cover transition duration-600 hover:scale-105"
              src="cups/Rectangle 11.png"
              alt="cups"
            />
            <img
              className="w-full object-cover transition duration-600 hover:scale-105"
              src="cups/Rectangle 12.png"
              alt="cups"
            />
            <img
              className="w-full object-cover transition duration-600 hover:scale-105"
              src="cups/Rectangle 13.png"
              alt="cups"
            />
            <img
              className="w-full object-cover transition duration-600 hover:scale-105"
              src="cups/Rectangle 14.png"
              alt="cups"
            />
            <img
              className="w-full object-cover transition duration-600 hover:scale-105"
              src="cups/Rectangle 15.png"
              alt="cups"
            />
            <img
              className="w-full object-cover transition duration-600 hover:scale-105"
              src="cups/Rectangle 16.png"
              alt="cups"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
