import React from 'react'
import { useState } from 'react'
import './Chatlist.css'


export default function Chatlist() {

    const [chats, setChats] = useState (["Chat1","Chat2","Chat3"]);

    return (
        <div>
            {chats.map((chat)=>{
                return(
                    <p>{chat}</p>
                )
            })}
        </div>
    )
}
