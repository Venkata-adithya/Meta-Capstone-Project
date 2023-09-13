import React from 'react'

function Card(props) {
  return (
    <div className='flex flex-col bg-slate-200 justify-evenly p-5 m-5 rounded'>
        <img src={props.image} alt='special item' className='max-w-xs w-72 h-52 p-0 m-0 border-0 rounded'/>
        <h4 className=' text-xl font-medium p-5'>{props.name}</h4>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card