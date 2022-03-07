import React, { Component } from 'react'
import {useNavigate} from 'react-router-dom'
function Admin() {
  
    return (  
        <div>
            <h2>Admin Panel</h2>
            <a  href='/Admin/EmployeeList' className='btn btn-primary'>GetEmployeeList</a>
        </div>
    );
}

export default Admin;