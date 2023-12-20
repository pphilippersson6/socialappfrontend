import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect } from 'react';
import Posts from './components/Posts';
import Nav from './components/Nav';
import Profile from './components/Profile';

function Home() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            window.location.href = '/login';
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <div className="home">
            <Nav />
            <Posts />
        </div>
    )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
