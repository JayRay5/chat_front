import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <>
    <form className="container-form">
        <label htmlFor="chat-Name"></label>
        <input type="text" id="chat-Name" placeholder="ChatName"/>
    </form>
    </>
  )
}
