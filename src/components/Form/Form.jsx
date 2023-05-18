import React from 'react';
import './Form.css';


export default function Form(props) {
  const handleChange = (event)=>{
    props.setName(event.target.value)
    console.log(props.name)
  }
  return (
    <>
    <form className="container-form">
        <label htmlFor="chat-Name"></label>
        <input type="text" id="chat-Name" onKeyDown={props.onKeyDown} onChange={handleChange} value={props.name} placeholder="ChatName"/>
    </form>
    </>
  )
}
