import React from 'react'
import { useState } from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';


import { delete_chat, get_chats } from '../../utils/api'

export default function Card(props) {
  const chat=props.chat
  const [isProcessing,setIsProcessing]= useState(false)

  const handleDelete = async(event)=>{
    event.preventDefault()
    event.stopPropagation();
    setIsProcessing(true)
    await delete_chat(chat[0])
    const result= await get_chats()
    props.setChatList(result)
    setIsProcessing(false)
  }

  const handleGetChat = async ()=>{
    if(localStorage.getItem("userId")){
     localStorage.setItem("chatId", chat[0])
     window.location.href="/home/chat"}
     else{
      window.alert("You are not connected")
      window.location.href="/"
     }
  }

  if (!chat) {
    // Gérer le cas où chat est undefined ou null
    return null; // Ou un message d'erreur, une autre représentation, etc.
  }

  return (
    <Link onClick={handleGetChat} className="card custom-card">
        {chat[1]}
        {isProcessing?(<Spinner/>):(<button className="button-delete"onClick={handleDelete}></button>)}

    </Link>
  )
}
