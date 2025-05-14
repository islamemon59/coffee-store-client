import React from 'react';
import { useLoaderData } from 'react-router';

function UpdateCoffee() {

  const coffee = useLoaderData()
  const {name, price, quantity, supplier, taste} = coffee

  const handleUpdateCoffee = e => {
    e.preventDefault()
    const form = e.target

    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries())
    console.log(updatedCoffee);
  }

  return (
        <div>
      <div className="p-12 space-y-4">
        <h1 className="text-6xl font-semibold">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
            defaultValue={name}
              type="text"
              className="input w-full"
              name="name"
              placeholder="Enter coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
            defaultValue={quantity}
              type="text"
              className="input w-full"
              name="quantity"
              placeholder="Enter coffee Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
            defaultValue={supplier}
              type="text"
              className="input w-full"
              name="supplier"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
            defaultValue={taste}
              type="text"
              className="input w-full"
              name="taste"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
            defaultValue={price}
              type="text"
              className="input w-full"
              name="price"
              placeholder="Enter coffee price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Enter coffee detail"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
          <label className="label">Details</label>
          <input
            type="text"
            className="input w-full"
            name="photo"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <button type="submit" className="btn btn-block">
          Add Coffee
        </button>
      </form>
    </div>
  );
}

export default UpdateCoffee;