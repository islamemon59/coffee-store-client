import React, { use } from "react";
import { AuthContext } from "../Context/Context";
import { Link } from "react-router";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        fetch("https://coffee-store-server-five.vercel.app/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, lastSignInTime }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after updated data", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <Link className="text-xl rancho text-primary font-bold text-shadow-xs text-shadow-base-300" to="/">Back to home</Link>
      <div className="card bg-base-200 sm:w-md w-[300px] my-10 shrink-0 shadow-xl">
        <div className="card-body">
          <h1 className="sm:text-5xl text-4xl font-bold text-center rancho text-primary">Sign In now!</h1>
          <form onSubmit={handleSignUp} className="fieldset">
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
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
