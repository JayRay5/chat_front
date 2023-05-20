import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
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

    //name of the chat
    const [chatName,setChatName]=useState("")

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
                setChatName(result[0].NAME)
                window.location.href='#last_message'
        }
            
            fetchData().catch((err)=>console.log(err))
    }

    }, [])

    useEffect(()=>{
        if (!localStorage.getItem("userId")) {
            window.location.href = '/';
        }
            else{

                const socket = io(`http://localhost:8000`, {
                    transports: ['websocket', 'polling', 'flashsocket'],
                    extraHeaders: {
                      'Content-Type': 'application/json'
                    },
                    withCredentials: true
                  }, (error) => {
                    if (error) {
                      console.error('WebSocket connection error:', error);
                    } else {
                      console.log('WebSocket connection established.');
                    }
                  }); 
    
                //listen if there is a new message
                socket.on('messages', (messages) => {
                    //set the message list
                    setChatData(messages)
                });
                // Nettoyez la connexion WebSocket lorsque le composant est démonté
                return () => {
                    socket.disconnect();
                };
            }
    },[])

    const handleNewUser = async () => {
        if(newUser!=""){
        setShowSpinner(true)
        await chat_add_user(newUser)
        await get_chat(localStorage.getItem("chatId"))
        setShowModal(!showModal)
        setShowSpinner(false)}
        else{
            window.alert("You have to enter a valid user")
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async() => {
        if(!/^\s*$/.test(inputValue)){
        setShowMessageSpinner(true)
        await write_message(inputValue)
        setShowMessageSpinner(false)
        setInputValue("")
        console.log(chatName)}
        else{
            setInputValue("")
        }
      
    };
   
    const handleModal = ()=>{
        setShowModal(!showModal)
    }

    return (
        <div className="page-container">
            
            <Topbar nameBtn={"Add User"} chatName={chatName} onClick={handleModal} />
            
            <CardMessage messages={chatData}/>
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
                <Modal.Header closeButton onClick={() => setShowModal(false)}>
                    <Modal.Title className="title-modal" id="contained-modal-title-vcenter">
                        Add a user to Chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUser showSpinner={showSpinner} setNewUser={setNewUser} users={usersData}/>
                </Modal.Body>
                <Modal.Footer>{
                    showMessageSpinner?(<Spinner/>):
                    <Button className="button-for-modal" setNewUser={setNewUser} onClick={handleNewUser}>Add</Button>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default PageChat;