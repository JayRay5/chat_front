//import for react
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { check_user } from '../../utils/api';
import Chatlist from '../../components/Chatlist/Chatlist';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal'

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
        <>
            <Navbar/>
            <div className="container-cards">
                <Card>
                    <h2>Hello Card</h2>
                </Card>
            </div>
            <Chatlist/>
            <Modal/>
        </>
    )

}
export default PageHome;