import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, photo, quantity } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {



        fetch(`http://localhost:4000/coffees/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .catch(data => {
            console.log("after deleted data", data);
        })
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border-1 border-gray-300">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full justify-around items-center">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="join join-vertical space-y-3">
          <button className="btn join-item">View</button>
          <button className="btn join-item">Edit</button>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
