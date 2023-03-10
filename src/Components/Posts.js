import React from 'react'
import {useState, useEffect } from "react";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState('');
    const [singlePost, setSinglePost] = useState(null);
  
    useEffect(() => {
      fetch('https://dummyjson.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []);
  
    const handleInputChange = (event) => {
      setPostId(event.target.value);
    };
  
    const handleSinglePost = () => {
      fetch(`https://dummyjson.com/posts/${postId}`)
        .then((response) => response.json())
        .then((data) => setSinglePost(data));
    };
  
    return (
      <div>
        <h1>Posts</h1>
        <div>
          <input type="text" placeholder="Enter post ID" value={postId} onChange={handleInputChange} />
        </div>
        <button onClick={handleSinglePost}>Choose Post</button>
        <div>
          <h2>All Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
        {singlePost && (
          <div>
            <h3>Post chosen</h3>
            <p>{singlePost.title}</p>
            <p>{singlePost.body}</p>
          </div>
        )}
      </div>
    );
  };

export default Posts;
