import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from './menu.svg'

export default function Navbar() {
  const[toggleMenu, setToggleMenu] = useState(false);
  const[largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setLargeur(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth);

    return() => {
      window.removeEventListener('resize', changeWidth);
    }

  },[])

  return (
    <nav>
      {(toggleMenu || largeur>500) &&(
        <ul className="liste">
            <img src={logo} alt="Logo" className="logo"/>
            <li className="items">User</li>
            <li className="items">Chat</li>
            <li className="items">Logout</li>
        </ul>
        )}
        <button onClick={toggleNav} className="btn"></button>
    </nav>
  )
}
