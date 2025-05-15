import React, { use } from 'react';
import { AuthContext } from '../Context/Context';

const SignIn = () => {

    const {signInUser} = use(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            const lastSignInTime = result.user?.metadata?.lastSignInTime
            fetch("http://localhost:4000/users", {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({email, lastSignInTime})
            })
            .then(res => res.json())
            .then(data => {
                console.log("after updated data", data);
            })
        }).catch(error => {
            console.log(error);
        })

    }

    return (
    <div className="card bg-base-100 mx-auto max-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
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
            Sign in
          </button>
        </form>
      </div>
    </div>
    );
};

export default SignIn;