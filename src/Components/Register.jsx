import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
  const {signUp} = useContext(AuthContext)
  
  
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      form.reset()
    })
    .catch(error => {
      console.log(error.message)
    })
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleRegister} className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register !!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="mt-4">
              <Link
                className="text-xl text-blue-600 hover:underline"
                to="/login"
              >
                already have an account?
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
