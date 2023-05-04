import React from 'react'

export default function Form() {
  return (
    <>
    <h1 className="title-form">New chat</h1>
    <form className="container-form">
        <label htmlFor="ChatName"></label>
        <input type="text" id="ChatName" placeholder="Chat name"/>
    
        <label htmlFor="Participant"></label>
        <input type="text" id="Participant" placeholder="Participant"/>
        
        <button>Create</button>
    </form>
    </>
  )
}
