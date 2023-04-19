import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-10 text-center text-2xl font-bold">
      <p>User Email: {user.email}</p>
    </div>
  );
};

export default Profile;
