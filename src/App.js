import React, { useState, useEffect,useHistory } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Admin from './Components/Admin'
import GetUsers from './Components/GetUsers';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/SignIn" element={<SignIn/>}/>
          <Route exact path="/SignUp" element={<SignUp/>}/>
          <Route exact path="/Admin" element={<Admin/>}/>
          <Route exact path="/Admin/EmployeeList" element={<GetUsers/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
