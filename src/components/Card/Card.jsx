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
    setIsProcessing(true)
    await delete_chat(chat[0])
    const result= await get_chats()
    props.setChatList(result)
    setIsProcessing(false)
  }

  if (!chat) {
    // Gérer le cas où chat est undefined ou null
    return null; // Ou un message d'erreur, une autre représentation, etc.
  }

  return (
    <Link to="/home/chat" className="card custom-card">
        {chat[1]}
        {isProcessing?(<Spinner/>):(<button onClick={handleDelete}> DELETE</button>)}

    </Link>
  )
}
