import React from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";



function App() {
  return (    
  <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/dashboard' element={<UserList/>}/>
    <Route exact path='/profileView' element={<UserDetails/>}/>
   </Routes>
  );
}

export default App;
