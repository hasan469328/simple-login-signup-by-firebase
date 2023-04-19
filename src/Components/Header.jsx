import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="navbar bg-primary text-primary-content flex justify-between items-center">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        authMaster
      </Link>
      <div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        {/* <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link> */}
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        )}
        {user ? (
          <>
            <span>{user.email}</span> &nbsp;
            <a
              onClick={handleLogOut}
              className="btn btn-xs normal-case"
              href=""
            >
              Log Out
            </a>
          </>
        ) : (
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
