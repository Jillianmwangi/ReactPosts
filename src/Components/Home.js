import React from 'react'

function Home() {
    return (
      <div>
        <h1> Welcome To the Posts Web App. Here you get to pick and choose whichever little story you'd like to read. Simply click the button below to get a view of all available little stories. 
        </h1>
        <h2>Enjoy!</h2>
        <button className='viewPosts' onClick={"/posts"}>Posts</button>
      </div>
    );
  };

export default Home;
