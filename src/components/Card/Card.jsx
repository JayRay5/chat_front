import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
  const chat=props.chat
  if (!chat) {
    // Gérer le cas où chat est undefined ou null
    return null; // Ou un message d'erreur, une autre représentation, etc.
  }
  console.log(chat.length)
  return (
    <Link to="/home/chat" className="card custom-card">
        {chat[1]}
    </Link>
  )
}
