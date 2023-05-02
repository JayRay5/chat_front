//import for react
import React, { useState, useEffect } from 'react';
//
import {login} from '../../utils/api'
import './PageLogin.css'

function PageLogin (){

    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState("")
    
    useEffect(()=>{
        localStorage.removeItem("userId")
    },[])

    const handleSubmit=()=>{
        login(userId,password)
    }

    const handleUserId = (event) => {
        setUserId(event.target.value);
        console.log(userId)
      };

    const handlePassword = (event) => {
        setPassword(event.target.value);
        console.log(password)
    };

    return(
        <>
            <h1 className="title-form">Log In using EUC Username</h1>
            <form className="container-form">
            <label htmlFor="userID"></label>
            <input value={userId} onChange={handleUserId} id="userId" type="text" placeholder="Username" className="user"></input>
            
            <label htmlFor="password"></label>
            <input value={password} onChange={handlePassword} id="password" type="password" placeholder="Password" className="password"></input>
            
            <button onClick={handleSubmit}>Continue</button>
            </form>
        </>
    )

}
export default PageLogin;