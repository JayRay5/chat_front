//import for react
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
 import Chatlist from '../../components/Chatlist/Chatlist';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal'
import { get_chats } from '../../utils/api';


function PageHome(){

    const [chatList, setChatList] = useState([])
    useEffect( ()=>{
        if(!localStorage.getItem("userId")){
            window.location.href = '/'; 
        }
        else{
            const fetchData = async ()=>{
                const result= await get_chats()
                console.log(result)
                setChatList(result)
            }
            
            fetchData().catch((err)=>console.log(err))
        }
        
    },[])

    const handleClick = ()=>{
        console.log(chatList)
    }
    return(
        <>
            <Navbar/>
            <div className="container-cards">
                <Card>
                    <h2>Hello Card</h2>
                    <button onClick={handleClick}>Click</button>
                </Card>
            </div>
            <Chatlist chats={chatList}/>
            <Modal/>
        </>
    )

}
export default PageHome;