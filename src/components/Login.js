import React from 'react';
import "../App.css";
import { sendPostRequest } from "../features/api";
import Form from "./Form";

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        sendPostRequest('/user/login/', data)
        .then(data => {
            console.log(data.Success);
            if(data.Success){
                localStorage.setItem('token', data.Details.access);
                localStorage.setItem('user', data.Details.user_id);
                localStorage.setItem('username', data.Details.username);
                localStorage.setItem('email', data.Details.email);
                window.location.href = '/';
            }else{
                alert(JSON.stringify(data));
            }
        })
    }

    const children = [
        {
            type: "text",
            name: "username",
            label: "Username"
        },
        {
            type: "password",
            name: "password",
            label: "Password"
        }
    ]
    return (
        <div className="login">
            <Form title="Login" handleSubmit={handleSubmit} children={children} />
        </div>
    )
}
