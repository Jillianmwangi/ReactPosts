import React from 'react'
import Home from './Components/Home';
import Posts from './Components/Posts';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    Welcome backkkk
    {/* <Posts/>
    <Home/> */}

    <Routes>
      
      <Route path="/" element={<Home />}>
          <Route index element={<Posts/>} />
      </Route>
    </Routes>
    </>

  );
}

export default App;

