import React, { useState, useEffect } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormUser from '../../components/FormUser/FormUser';
import CardMessage from '../../components/CardMessage/CardMessage';
import './PageChat.css';

import { get_chat,get_users_filtered,chat_add_user,write_message } from '../../utils/api';
import Spinner from 'react-bootstrap/Spinner';

function PageChat() {
    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showMessageSpinner, setShowMessageSpinner] = useState(false);
    //all data of the chat
    const [chatData,setChatData] = useState([])

    //all data of all users (for the form to add user)
    const [usersData,setUsersData] = useState([])

    //id of the new user add in the form
    const [newUser,setNewUser] = useState("")

    //input to enter a new message
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (!localStorage.getItem("userId")) {
            window.location.href = '/';
        }
        else {
            console.log(localStorage.getItem("chatId"))
            const fetchData = async ()=>{
                const result= await get_chat(localStorage.getItem("chatId"))
                setChatData(result)
                const users = await get_users_filtered()
                setUsersData(users)
                console.log(result)
                console.log(users)
            }
            
            fetchData().catch((err)=>console.log(err))
        }

    }, [])

    const handleNewUser = async () => {
        setShowSpinner(true)
        await chat_add_user(newUser)
        await get_chat(localStorage.getItem("chatId"))
        setShowModal(!showModal)
        setShowSpinner(false)
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async() => {
        setShowMessageSpinner(true)
        await write_message(inputValue)
        setShowMessageSpinner(false)
        setInputValue("")
    };
    const handleModal = ()=>{
        setShowModal(!showModal)
    }

    return (
        <div className="page-container">
            <Topbar nameBtn={"Add User"} onClick={handleModal} />
            <CardMessage/>
            <div className="bottom-bar">
            <div className='containerInput'>
            <label htmlFor="inputValue"></label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="chat"
                    placeholder="Aa"
                />
                </div>
                <Button className="inputChat-button" onClick={handleButtonClick}></Button>
            </div>
            <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="title-modal" id="contained-modal-title-vcenter">
                        Add a user to Chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUser showSpinner={showSpinner} setNewUser={setNewUser} users={usersData}/>
                </Modal.Body>
                <Modal.Footer>{
                    showMessageSpinner?(<Spinner/>):
                    <Button className="button-modal" setNewUser={setNewUser} onClick={handleNewUser}>Add</Button>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default PageChat;