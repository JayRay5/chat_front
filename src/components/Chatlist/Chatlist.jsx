import React from 'react'
import { useState } from 'react'
import './Chatlist.css'
import { get_chat } from '../../utils/api'
import Card from '../Card/Card'


export default function Chatlist(props) {

    const chats= props.chats
    /*
    const handleClick=(chat)=>{
        console.log(chat)
        get_chat(chat[0])
    }*/
    return (
        <div>
            {chats.map((chat)=>{
                return(
                    <Card chat={chat}/>
                )
            })}
        </div>
    )
}
