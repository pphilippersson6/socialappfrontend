import React from 'react';
import { sendPostRequest } from '../features/api';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const signupResponse = await sendPostRequest('/user/signup/', data);

      if (signupResponse.success) {
        const loginData = {
          username: e.target.username.value,
          password: e.target.password.value,
        };

        const loginResponse = await sendPostRequest('/user/login/', loginData);

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
      } else {
        alert(JSON.stringify(signupResponse));
      }
    } catch (error) {
      console.error('Error during signup/login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const children = [
    {
      type: 'email',
      name: 'email',
      label: 'Email',
    },
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
    <div className="signup">
      <Form title="Signup" handleSubmit={handleSubmit} children={children} />
    </div>
  );
}
