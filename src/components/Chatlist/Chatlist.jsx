import React from 'react'
import { useState } from 'react'
import './Chatlist.css'


export default function Chatlist(props) {

    const chats= props.chats

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
