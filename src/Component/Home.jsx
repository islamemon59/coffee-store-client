import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
  console.log(coffees);
  return (
    <div>
      <div className="bg-base-200">
        <div className="grid grid-cols-4 gap-6 py-12 max-w-7xl mx-auto">
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
        <div>
          <h3 className="text-center">--- Slip & Savor ---</h3>
          <h1 className="text-[55px] rancho text-center text-primary">
            Our Popular Products
          </h1>
          <button className="btn text-2xl bg-base-300 hover:bg-base-200 text-base-200 hover:text-primary border-2 border-primary rounded-sm rancho">
            Add Coffee 
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
