import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    // Clear user data from localStorage or perform any other logout actions
    localStorage.removeItem('user');

    // Redirect to the login page or any other appropriate page
    // You may need to replace '/login' with the actual path for your login page
    window.location.href = '/login';
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
