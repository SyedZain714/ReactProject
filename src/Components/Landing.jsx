import React, { Component } from 'react'
import { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
function Landing() {

    let hist=useNavigate();

    function displayScreen(arg)
    {
        if(arg==1)
            hist('/SignIn')
        else if(arg==2)
            hist('/SignUp')
        else
            hist('/Admin')

    }
    return (
        <body>
            <div class="main">
                <h2 class="head">COMPREHENSIVE PAYROLL SOFTWARE</h2>
                <div class="container h-100">
        <div class="d-flex h-100 btn-group-vertical">
            <div class="align-self-start mx-auto">
                <button onClick={()=>displayScreen(2)} type="button" class="btn btn-danger">
                  Click Me!
                </button>
            </div>
            <div class="align-self-center mx-auto">
                <button onClick={()=>displayScreen(1)} type="button" class="btn btn-primary">
                  Click Me!
                </button>
            </div>
            <div class="align-self-end mx-auto">
                <button onClick={()=>displayScreen(3)} type="button" class="btn btn-success">
                  Click Me!
                </button>
            </div>
        </div>
    </div>
            </div>
        </body>
    );
}

export default Landing;