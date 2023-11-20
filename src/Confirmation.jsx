import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';
function Confirmation() {
  return (
    <div className='bg-form-bg bg-no-repeat bg-cover'>
        <section className=" text-center text-2xl flex flex-col gap-10 text-white m-10 mt-0 p-20 pb-5">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      <section className="flex flex-row justify-center p-5 pt-0">
        <Link >
          <button className=" p-2 rounded bg-primary-yellow m-5">Order Online</button>
        </Link>
        <Link >
          <button className=" p-2 rounded bg-primary-yellow m-5"> Home Page</button>
        </Link>
      </section>
      <Footer/>
    </div>
  )
}

export default Confirmation