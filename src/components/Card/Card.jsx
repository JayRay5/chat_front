import React from 'react'
import './Card.css'

export default function Card(props) {
  const chat=props.chat
  if (!chat) {
    // Gérer le cas où chat est undefined ou null
    return null; // Ou un message d'erreur, une autre représentation, etc.
  }
  console.log(chat.length)
  return (
    <div className="card">
        {chat[1]}
    </div>
  )
}
