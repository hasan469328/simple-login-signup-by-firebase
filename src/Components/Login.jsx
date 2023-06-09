import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);


  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result => {
      const loggedUser = result.user;
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleLogin} className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login !!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-4">
              <FontAwesomeIcon onClick={handleGoogleLogin} className="w-8 h-8" icon={faGoogle} />
              &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon className="w-8 h-8" icon={faGithub} />
            </div>
            <div className="mt-4">
              <Link
                className="text-xl text-blue-600 hover:underline"
                to="/register"
              >
                new to authMaster?
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
