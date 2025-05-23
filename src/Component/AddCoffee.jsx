import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch("http://localhost:4000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("new data added in our database", data);
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset()
        }
      });
  };

  return (
<div className="max-w-6xl mx-auto my-16">
  <Link to="/"><h1 className="mb-10 text-primary font-semibold rancho text-2xl">Back to Home</h1></Link>
  
      <div className=" bg-accent-content rounded-md">
      <div className="p-16 space-y-4">
        <h1 className="text-6xl font-semibold rancho text-center text-primary">Add Coffee</h1>
        <p className="text-center text-accent">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee} className="px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset rounded-box">
            <label className="label font-bold text-secondary text-[16px]">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Enter coffee name"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box">
            <label className="label font-bold text-secondary text-[16px]">Quantity</label>
            <input
              type="text"
              className="input w-full"
              name="quantity"
              placeholder="Enter coffee Quantity"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box">
            <label className="label font-bold text-secondary text-[16px]">Supplier</label>
            <input
              type="text"
              className="input w-full"
              name="supplier"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box">
            <label className="label font-bold text-secondary text-[16px]">Taste</label>
            <input
              type="text"
              className="input w-full"
              name="taste"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box">
            <label className="label font-bold text-secondary text-[16px]">Price</label>
            <input
              type="text"
              className="input w-full"
              name="price"
              placeholder="Enter coffee price"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box">
            <label className="label font-bold text-secondary text-[16px]">Details</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Enter coffee detail"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset rounded-box my-6">
          <label className="label font-bold text-secondary text-[16px]">Details</label>
          <input
            type="text"
            className="input w-full"
            name="photo"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <button type="submit" className="btn w-full rancho bg-base-300 text-base-200 border-2 border-primary hover:text-primary hover:bg-base-200">
          Add Coffee
        </button>
      </form>
    </div>
</div>
  );
};

export default AddCoffee;
