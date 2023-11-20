import React from 'react'
import Footer from './Footer';
import Hero from './Hero';
import Main from './Main';
import Specials from './Specials';
import Testimonials from './Testimonials';

function HomePage() {
  return (
    <>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <Main/>
      <Footer/>
    </>
  )
}

export default HomePage