//import for react
import React, { useState, useEffect } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import { check_user } from '../../utils/api';
import Chatlist from '../../components/Chatlist/Chatlist';
import Card from '../../components/Card/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../../components/Form/Form';
import './PageHome.css';

function PageHome() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("userId")) {
            window.location.href = '/';
        }
        else {
            console.log(localStorage.getItem("userId"))

        }

    }, [])

    const handleModal = () => {
        console.log(showModal)
        setShowModal(!showModal)
    }
    const handleCheck = () => {
        check_user()
    }
    return (
        <>
            <Topbar />
            <div className="container-cards">
                <Card>
                    <h2>Hello Card</h2>
                </Card>
            </div>
            <Chatlist />
            <Button variant="primary" onClick={handleModal}>Add</Button>
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