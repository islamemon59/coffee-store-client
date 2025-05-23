import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
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
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingCoffees = coffees.filter((cof) => cof._id != _id);
              setCoffees(remainingCoffees);

              console.log("after deleted data", data);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-accent-content shadow-sm border-1 px-4 py-8 border-gray-300 transition duration-600 hover:scale-110 hover:shadow-xl">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="flex w-full justify-around items-center">
        <div className="space-y-2">
          <h2 className="card-title text-secondary font-bold">
            Name: <span className="text-accent font-normal">{name}</span>
          </h2>
          <p className="font-bold text-secondary">
            Price: <span className="text-accent font-normal">{price} TK</span>
          </p>
          <p className="font-bold text-secondary">
            Quantity:{" "}
            <span className="text-accent font-normal">{quantity}</span>
          </p>
        </div>
        <div className="join join-vertical space-y-3">
          <Link to={`/details/${_id}`}>
            <button className="bg-primary-content p-2 rounded-md join-item hover:bg-base-300 transition duration-400">
              <FaEye className="text-base-100" size={16} />
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="bg-secondary p-2 rounded-md join-item hover:bg-accent transition duration-400">
              <FaPen className="text-base-100" size={16} />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="p-2 bg-error text-base-100 rounded-md join-item hover:bg-red-600 transition duration-400"
          >
            <FaTrash></FaTrash>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
