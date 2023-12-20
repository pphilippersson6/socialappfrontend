import React from 'react';
import '../App.css';
import { sendPostRequest } from '../features/api';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const loginResponse = await sendPostRequest('/user/login/', data);

      console.log(loginResponse.Success);

      if (loginResponse.Success) {
        const { access, user_id, username, email } = loginResponse.Details;

        localStorage.setItem('token', access);
        localStorage.setItem('user', user_id);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);

        history.push('/');
      } else {
        alert(JSON.stringify(loginResponse));
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const children = [
    {
      type: 'text',
      name: 'username',
      label: 'Username',
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
    },
  ];

  return (
    <div className="login">
      <Form title="Login" handleSubmit={handleSubmit} children={children} />
    </div>
  );
}
