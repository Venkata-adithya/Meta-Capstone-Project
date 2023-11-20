import React from 'react'
import logo from './Logo .png'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
      <ul className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-12  ">
        <img src={logo} alt='little lemon'/>
        <Link to='/'>Home</Link><br/>
          <Link to='/'>About</Link><br/>
          <Link to='/'>Menu</Link><br/>
          <Link to='/booking'>Reservations</Link><br/>
          <Link to='/'>Order</Link><br/>
          <Link to='/'>Login</Link><br/>
      </ul>
    </>
  )
}

export default Nav