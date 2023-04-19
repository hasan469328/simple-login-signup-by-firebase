import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
  const name = useContext(AuthContext);
  return (
    <div>
      <h1>THis is Home</h1>
      <p>Name: {name.displayName}</p>
    </div>
  );
};

export default Home;