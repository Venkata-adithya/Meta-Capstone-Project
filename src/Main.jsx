import React from 'react'
import pic2 from './Ownerpic2.jpg'

function Main() {
  return (
    <div className='flex justify-evenly mt-0 mb-0 pt-0 pb-0 items-center bg-primary-yellow '>
      <div className=' mx-40 p-16 pr-0 mr-5 mt-10 mb-10 pt-5 pb-5'>
        <h1 className=' text-5xl p-2'>Little Lemon</h1>
        <h4 className='text-3xl p-1 pl-3'>Chicago</h4>
        <p className='p-2 pl-3'>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
      </div>
      <div className=' mx-40 p-16 pl-0 ml-5 mt-10 mb-10 pt-5 pb-5'>
        <img className='max-w-xs rounded w-200'src={pic2}/>
      </div>
    </div>
  )
}

export default Main