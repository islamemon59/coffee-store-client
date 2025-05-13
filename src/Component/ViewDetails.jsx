import React from "react";
import { useLoaderData } from "react-router";

const ViewDetails = () => {
    const coffee = useLoaderData()
    const {photo, name, price, quantity} = coffee
  return (
    <div className="card bg-base-100 w-96 shadow-sm mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}
        </p>
        <p>Quantity: {quantity}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
