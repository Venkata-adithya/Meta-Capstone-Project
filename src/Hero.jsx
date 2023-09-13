import React from 'react'
import food from './restauranfood.jpg'
function Hero() {
  return (

        <div className='bg-primary-green flex justify-evenly mt-0 mb-0 pt-0 pb-0'>
            <div className='mx-40 p-16 pr-0 mr-5 mt-5 mb-5 pt-5 pb-5'>
                <h1 className=' text-5xl p-2 text-primary-yellow'>Little Lemon</h1>
                <h4 className='text-3xl text-white p-1 pl-3'>Chicago</h4>
                <p className='  text-white p-2 pl-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quod unde, sed nisi dicta nemo molestias quo modi placeat provident minus facere asperiores ipsa totam, corrupti natus fugiat soluta similique.</p>
                <button className=' rounded bg-primary-yellow p-1 ml-3'>Reserve Table</button>
            </div>
            <div className='mx-40 p-16 pl-0 ml-5 mt-5 mb-5 pt-5 pb-5'>
                <img src={food} className='max-w-xs w-56 h-56 rounded' alt='hero section food display'/>
            </div>
        </div>
  )
}

export default Hero