//import for react
import React, { useState, useEffect } from 'react';

//
import {login} from '../utils/api'



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
      };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    return(
        <div>
            <input value={userId} onChange={handleUserId} ></input>
            <input value={password} onChange={handlePassword} ></input>
            <button onClick={handleSubmit}>Se connecter</button>
        </div>
    )

}

export default PageLogin;