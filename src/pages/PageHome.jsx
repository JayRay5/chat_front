//import for react
import React, { useState, useEffect } from 'react';

import { check_user } from '../utils/api';

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
            <button title='test' onClick={handleCheck}/>
        </div>
    )

}

export default PageHome;