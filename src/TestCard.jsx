import React from 'react'
import star from './staricon.png'

function TestCard(props) {
  return (
    <div className='flex flex-col bg-slate-200 justify-evenly w-80 h-80 p-5 m-5 rounded'>
        <img src={star} alt='star icon design' className='max-w-xs w-40 h-40 p-0 m-0 border-0 rounded'/>
        <h5 className=' text-xl font-medium p-5'>{props.name}</h5>
        <p>{props.feed}</p>
    </div>
  )
}

export default TestCard