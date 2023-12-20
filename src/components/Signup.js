import React from 'react';
import { sendPostRequest } from "../features/api";
import Form from "./Form";

export default function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value
        }
        console.log(data);

        const resp = sendPostRequest('/user/signup/', data);
        resp.then(data => {
            if(data.success){
                const loginData = {
                    username: e.target.username.value,
                    password: e.target.password.value
                }
                sendPostRequest('/user/login/', loginData)
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
            }else{
                alert(JSON.stringify(data));
            }
        })
    }

    const children = [
        {
            type: "email",
            name: "email",
            label: "Email"
        },
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
        <div className="signup">
            <Form title="Signup" handleSubmit={handleSubmit} children={children} />
        </div>
    )
}
