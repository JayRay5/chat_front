import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './Topbar.css'
import { log_out } from '../../utils/api';


export default function Topbar(props) {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setLargeur(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])

  return (
    <Navbar collapseOnSelect expand="md" className="navbar">

      <Container>
        <Navbar.Brand href="/home">
        <div className="container-navbar-chat">
        <Button className="chat-name-button"></Button>
        <div className="chat-name-style">Nom chat</div>
        </div>
          {props.home?(
          <img src={logo} width="210" height="100" className="logo" alt="Logo" />):<div></div>}
        </Navbar.Brand>
        <Nav className="elements-navbar">
          <Nav.Link onClick={log_out}>Logout</Nav.Link>
          <Button className="button-navbar" onClick={props.onClick}>{props.nameBtn}</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}








