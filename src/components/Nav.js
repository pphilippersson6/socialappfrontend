import { useEffect, useState } from "react";
import { sendGetRequest, sendPostRequest } from "../features/api";
import "../styles/Nav.css";

export default function Nav() {
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            sendGetRequest('/user/followers/')
            .then(data => {
                setFollowers([...data.followers]);
            })
            .catch(err => {
                window.location.href = '/login';
            })
            sendGetRequest('/user/following/')
            .then(data => {
                setFollowing([...data.following]);
            })
            .catch(err => {
                window.location.href = '/login';
            })
            setUsername(localStorage.getItem('username'));
            setEmail(localStorage.getItem('email'));
        }
    }, [])


    return (
        <div className="nav">
            <h1>Profile</h1>
            <div className="nav-user">
                <div className="nav-user-img">
                </div>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
            <div className="nav-followers">
                <p> Followers: {followers.length} </p>
                <p> Following: {following.length} </p>
            </div>
        </div>
    )
}
