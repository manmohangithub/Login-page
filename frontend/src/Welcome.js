
import React from 'react';

const Welcome = () => {
  const username = localStorage.getItem('username');

  return (
    <div style={{textAlign:'center', marginTop:'100px'}}>
      <h1>Welcome, {username}!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Welcome;
