import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <ul className="liste">
            <li className="items">User</li>
            <li className="items">Chat</li>
            <li className="items">Search</li>
        </ul>
        <button className="btn">Button</button>
    </nav>
  )
}
