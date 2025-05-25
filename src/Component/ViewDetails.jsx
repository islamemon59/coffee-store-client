import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ViewDetails = () => {
  const [coffee, setCoffee] = useState({})
  const {photo, name, price, quantity, supplier, taste, details } = coffee;
  const {id} = useParams()
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:4000/coffees/${id}`)
    .then(data => {
      setCoffee(data.data);
    })
  },[id])

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
