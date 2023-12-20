import React from 'react';

const Profile = () => {
  const handleLogout = () => {

    localStorage.removeItem('user');

    window.location.href = 'src/components/Login.js';
  };

  return (
    <div>
      <h1>Profile</h1>
      {/* Your profile content goes here */}
      
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div> 
  );
};

export default Profile;
