import { useEffect, useState } from "react";
import { sendGetRequest, sendPostRequest } from "../features/api";
import "../styles/Posts.css";
import Form from "./Form";

function PostModal({handleClose}){
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            content: e.target.body.value,
            user: localStorage.getItem('user')
        }
        sendPostRequest('/post/create/', data)
        .then(data => {
            if(data.success){
                handleClose();
                window.location.reload();
            }else{
                alert(JSON.stringify(data));
            }
        })
    }

    const children = [
        {
            type: "text",
            name: "title",
            label: "Title"
        },
        {
            type: "textarea",
            name: "body",
            label: "Body"
        }
    ]
    return (
        <div className="post-modal">
            <div className="post-modal-content">
                <div className="post-modal-body">
                    <button onClick={handleClose}>X</button>
                    <Form title="Add Post" handleSubmit={handleSubmit} children={children} />
                </div>
            </div>
        </div>
    )
}

const Footer = ({post}) => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    console.log(post);
    return (
        <>
            <button onClick={() => {
                sendPostRequest('/user/like_post/'+post.id+'/')
                .then(data => {
                    if(data.success){
                        setLikes(data.like_count);
                        setLiked(true);
                    }else{
                        setLikes(likes + 1);
                    }
                })
            }
            } disabled={liked}>{liked ? 'Liked' : 'Like'}
                </button>
            <span>{likes} likes</span>
        </>
    )
}

const Post = ({post}) => {
    return (
        <div className="post">
           <div className="post-header">
                <h3>{post.title}</h3>
                <p>{post.user.username}</p>
            </div>
            <div className="post-body">
                <p>{post.content}</p>
            </div>
            <div className="post-time">
                <p>{new Date(post.created_at).toLocaleString()}</p>
            </div>
            <div className="post-footer">
                <Footer post={post} />
            </div>


        </div>
    )
}

export default function Posts() {
    const [all, setAll] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        sendGetRequest('/post/all_posts/')
        .then(data => {
           setPosts([...data.posts]);
        setAll([...data.posts]);
        })
    }, [])
    const handleClose = () => {
        const modal = document.querySelector('.post-modal');
        modal.style.display = 'none';
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const data = {
            search: e.target.search.value
        }
        //filter all posts
        const filtered = all.filter(post => {
            return post.title.includes(data.search) || post.content.includes(data.search);
        })

        setPosts([...filtered]);
    }

    const handleSort = (e) => {
        const data = {
            sort: e.target.value
        }

        if(data.sort === 'new'){
            const sorted = all.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            })
            setPosts([...sorted]);
        }

        if(data.sort === 'old'){
            const sorted = all.sort((a, b) => {
                return new Date(a.created_at) - new Date(b.created_at);
            })
            setPosts([...sorted]);
        }

    }

    return (
        <div className="posts">
            <div className="add">
                <div>
                    <form onSubmit={handleSearch}>
                    <input type="text" name="search" placeholder="Search" onChange={(e)=>{
                        console.log(e.target.value);
                        if(e.target.value === ''){

                            setPosts([...all]);
                        }
                    }}/>
                    <input type="submit" value="Search" />
                    </form>

                </div>
                <span>Sort By: </span>
                <select name="sort" id="sort" onChange={handleSort}>
                <option value="new">New</option>
                <option value="old">Old</option>
                </select>
                <button onClick={
                    () => {
                        const modal = document.querySelector('.post-modal');
                        modal.style.display = 'flex';
                    }
                }>Add Post</button>

            </div>
            <PostModal handleClose={handleClose} />
            <div className="posts-container">
                {posts.map((post, index) => {
                    return <Post key={index} post={post} />
                })}
            </div>
        </div>
    )
}
