import React from 'react'
import flogo from './footer-logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex flex-row justify-evenly bg-primary-green text-white    '>
      <img src={flogo} className=' w-24 h-36 m-12 my-24'/>
      <section className=' my-10'>
        <h3 className='text-xl font-medium p-5'>Navigation</h3>
        <div className=' p-5 pt-2'>
          <Link to='/'>Home</Link><br/>
          <Link to='/'>About</Link><br/>
          <Link to='/'>Menu</Link><br/>
          <Link to='/'>Reservations</Link><br/>
          <Link to='/'>Order</Link><br/>
          <Link to='/'>Login</Link><br/>
        </div>
      </section>
      <section className=' my-10'>
        <h3 className='text-xl font-medium p-5'>Contact</h3>
          <div className=' p-5 pt-2'>
            <p>2395 Maldove Way,</p><br/>
            <p>Chicago Illinois</p><br/>
            <p>(629)-243-6827</p><br/>
            <p>info@littlelemon.com</p><br/>
        </div>
      </section>
      <section className=' my-10'>
      <h3 className='text-xl font-medium p-5'>Connect</h3>
      <div className=' p-5 pt-2'>
        <p>Facebook</p><br/>
        <p>Instagram</p><br/>
      </div>
      </section>
    </div>
  )
}

export default Footer