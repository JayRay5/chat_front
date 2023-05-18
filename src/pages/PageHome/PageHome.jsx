//import for react
import React, { useState, useEffect } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Chatlist from '../../components/Chatlist/Chatlist';
import Card from '../../components/Card/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../../components/Form/Form';
import './PageHome.css';

import { get_chats } from '../../utils/api';

function PageHome() {
    const [showModal, setShowModal] = useState(false);
    const [chatList,setChatList]= useState([])
    useEffect(() => {
        if (!localStorage.getItem("userId")) {
            window.location.href = '/';
        }
        else {
            const fetchData = async ()=>{
                const result= await get_chats()
                console.log(result)
                setChatList(result)
            }
            
            fetchData().catch((err)=>console.log(err))

        }

    }, [])

    const handleModal = () => {
        console.log(showModal)
        setShowModal(!showModal)
    }
    

    const handleClick = () => {
        console.log(chatList)
    }
    return (
        <>
            <Topbar nameBtn={"Add Chat"} onClick={handleModal}/>
            <div className="container-cards">
            </div>
            <Chatlist chats={chatList} />
            <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="title-modal" id="contained-modal-title-vcenter">
                        Choose a name for your Chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button-modal" onClick={handleModal}>Create</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default PageHome;