import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <h1>THis is Home</h1>
      <p>Name: {user?.email}</p>
    </div>
  );
};

export default Home;