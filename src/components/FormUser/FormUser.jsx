import React,{useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './FormUser.css';

export default function FormUser(props) {
  const users=props.users
  //set the vale of the input
  const [searchValue, setSearchValue] = useState('');
  //set the list of suggested user
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    // Filter the users based on the input value
    const filteredUsers = users.filter((user) =>{
      let user_name= user[2] +user[3]
      return user_name.toLowerCase().includes(value.toLowerCase())}
    );
    setSuggestedUsers(filteredUsers);
  };

  // set the user selected
  const handleClick = (user)=>{
    setSearchValue(user[2]+" "+user[3])
    props.setNewUser(user[0])
  }
  return (
    <>
      <form className="container-form">
        <label htmlFor="chat-Name"></label>
        <input
          type="text"
          id="chat-Name"
          placeholder="UserName"
          value={searchValue}
          onChange={handleInputChange}
        />
      </form>

      {/* Render the suggested users */}
      {props.showSpinner? (<Spinner/>):
      <ul>
        {suggestedUsers.map((user, index) => (
          <li  onClick={()=>{handleClick(user)}} key={index}>{user[2] +" "+user[3]}</li>
        ))}
      </ul>
    }
    </>
  )
}