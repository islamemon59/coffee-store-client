import React from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router";

const ViewDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { photo, name, price, quantity, supplier, taste, details } = coffee;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <Link to="/"><h1 className="mb-10 text-primary font-semibold rancho text-2xl">Back to Home</h1></Link>
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 p-10 bg-accent-content max-w-4xl mx-auto rounded-2xl">
        {/* Coffee Image */}
        <div className="w-74">
          <img src={photo} alt="Coffee Cup" className="rounded-lg shadow-lg" />
        </div>

        {/* Coffee Info */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-primary drop-shadow-md rancho">
            Niceties
          </h2>

          <p>
            <span className="font-semibold text-secondary">Name:</span> <span className="text-accent">{name}</span>
          </p>
          <p>
            <span className="font-semibold text-secondary">Price:</span> <span className="text-accent">{price}</span>
          </p>
          <p>
            <span className="font-semibold text-secondary">Supplier:</span> <span className="text-accent">{supplier}</span>
          </p>
          <p>
            <span className="font-semibold text-secondary">Taste:</span> <span className="text-accent">{taste}</span>
          </p>
          <p>
            <span className="font-semibold text-secondary">Quantity:</span> <span className="text-accent">{quantity}</span>
          </p>
          <p>
            <span className="font-semibold text-secondary">Details:</span> <span className="text-accent">{details}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
