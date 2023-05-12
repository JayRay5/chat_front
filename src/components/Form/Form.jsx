import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <>
    <form className="container-form">
        <label htmlFor="ChatName"></label>
        <input type="text" id="ChatName" placeholder="ChatName"/>
    </form>
    </>
  )
}
