import React from 'react';
import './FormUser.css';

export default function FormUser() {
  return (
    <>
    <form className="container-form">
        <label htmlFor="chat-Name"></label>
        <input type="text" id="chat-Name" placeholder="UserName"/>
    </form>
    </>
  )
}