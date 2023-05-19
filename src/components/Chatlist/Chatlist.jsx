import React from 'react'
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
        <div className='card-chat-list'>
            {chats.map((chat)=>{
                return(
                    <Card setChatList={props.setChatList} chat={chat}/>
                )
            })}
        </div>
    )
}
