import React from 'react'
import logo from './Logo .png'

function Nav() {
  return (
    <>
      <ul className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-12  ">
        <img src={logo} alt='little lemon'/>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </>
  )
}

export default Nav