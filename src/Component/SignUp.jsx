import React, { use } from "react";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router";

const SignUp = () => {
  const { createUser, setCurrentUser } = use(AuthContext);

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
        const user = result.user;
        setCurrentUser(user);
        const creationTime = result.user.metadata.creationTime;
        const lastSignInTime = result.user.metadata.lastSignInTime;

        axios
          .post("https://coffee-store-server-five.vercel.app/users", {
            email,
            ...userData,
            creationTime,
            lastSignInTime,
          })
          .then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log("after adding user data", data);
              console.log("after added data response come", data.data);
            }
          });

        // fetch("https://coffee-store-server-five.vercel.app/users", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email,
        //     ...userData,
        //     creationTime,
        //     lastSignInTime,
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //   });
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className=" items-center min-h-screen flex justify-center flex-col">
      <Link className="text-xl rancho text-primary font-bold text-shadow-xs text-shadow-base-300" to="/">Back to home</Link>
      <div className="card bg-base-200 sm:w-md w-[300px] my-10 shrink-0 shadow-xl">
        <div className="card-body">
          <h1 className="sm:text-5xl text-4xl font-bold text-center rancho text-primary">Sign Up now!</h1>
          <form onSubmit={handleSignUp} className="fieldset w-full">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Name"
            />
            <label className="label">Address</label>
            <input
              type="text"
              className="input w-full"
              name="address"
              placeholder="Address"
            />
            <label className="label">Phone</label>
            <input
              type="text"
              className="input w-full"
              name="phone"
              placeholder="Phone"
            />
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 rancho">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
