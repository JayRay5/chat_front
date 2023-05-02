//import for react
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { check_user } from '../../utils/api';

function PageHome(){
    useEffect(()=>{
        if(!localStorage.getItem("userId")){
            window.location.href = '/'; 
        }
        else{
            console.log(localStorage.getItem("userId"))
            
        }

    },[])
    const handleCheck = ()=>{
        check_user()
    }
    return(
        <div>
            <Navbar/>
            <button title='test' onClick={handleCheck}/>
        </div>
    )

}

export default PageHome;