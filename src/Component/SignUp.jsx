import React, { use } from "react";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userData } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, userData);
    createUser(email, password)
      .then((result) => {
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...userData, email}),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log("after adding user data", data);
            }
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card bg-base-100 mx-auto max-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Name" />
          <label className="label">Address</label>
          <input
            type="text"
            className="input"
            name="address"
            placeholder="Address"
          />
          <label className="label">Phone</label>
          <input
            type="text"
            className="input"
            name="phone"
            placeholder="Phone"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            className="input"
            name="photo"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
