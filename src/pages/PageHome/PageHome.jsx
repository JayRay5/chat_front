//import for react
import React, { useState, useEffect } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Chatlist from '../../components/Chatlist/Chatlist';
import Spinner from 'react-bootstrap/Spinner';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../../components/Form/Form';
import './PageHome.css';

import { get_chats, create_chat } from '../../utils/api';

function PageHome() {
    const [showModal, setShowModal] = useState(false);
    const [chatList,setChatList]= useState([])
    const [newChatName,setNewChatName]= useState()
    const [showSpinnerAddChat,setShowSpinnerAddChat] = useState(false)
    useEffect(() => {
        if (!localStorage.getItem("userId")) {
            window.location.href = '/';
        }
        else {
            const fetchData = async ()=>{
                const result= await get_chats()
                setChatList(result)
            }
            
            fetchData().catch((err)=>console.log(err))

        }

    }, [])

    const handleModal = () => {
        console.log(showModal)
        setShowModal(!showModal)

    }
    
    const handleNewChat = async (event)=>{
        if(newChatName!=""){
        console.log(newChatName)
        event.preventDefault()
        setShowSpinnerAddChat(true)
        await create_chat(newChatName)
        setNewChatName("")
        const result= await get_chats()
        setChatList(result)
        handleModal()
        setShowSpinnerAddChat(false)
        }
        else{
            window.alert("You have to enter a name for the chat!")
        }
        
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
          // Enter key is pressed, validate the modal button
          handleNewChat();
        }
      };
    return (
        <>
            <Topbar nameBtn={"Add Chat"} onClick={handleModal}/>
            <div className=".container-conversations">
            <Chatlist setChatList={setChatList} chats={chatList} />
            </div>
            <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="title-modal" id="contained-modal-title-vcenter">
                        Choose a name for your Chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onKeyDown={handleKeyDown} setName={setNewChatName} name={newChatName}/>
                </Modal.Body>
                <Modal.Footer>
                    {showSpinnerAddChat?(
                        <Spinner/>
                    ):
                    <Button className="button-modal" onClick={handleNewChat}>Create</Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default PageHome;