import React from 'react'
import Card from './Card'
import greekSalad from './greek salad.jpg'
import brucheta from './bruchetta.svg'
import lemonDessert from './lemon dessert.jpg'

function Specials() {
  return (
    <div>
        <div className='flex justify-between'>
          <h4 className='m-56 mt-10 mb-0 text-3xl'>Specials</h4>
          <button className=' rounded bg-primary-yellow p-2  m-56 mt-10 mb-0'>Online Menu</button>
        </div>
        <div className='flex m-52 mt-5'>
            <Card image={greekSalad} name="Greek Salad" desc="In an American-style Greek salad, lettuce, tomatoes, feta (often served in multiple cube-shaped cuttings mixed with the vegetables), and olives are the most standard elements, but cucumbers, peperoncini (pickled hot peppers), bell peppers, onions, radishes, dolmades, and anchovies/sardines are common."/>
            <Card image={brucheta} name="Bruchetta" desc="In an American-style Greek salad, lettuce, tomatoes, feta (often served in multiple cube-shaped cuttings mixed with the vegetables), and olives are the most standard elements, but cucumbers, peperoncini (pickled hot peppers), bell peppers, onions, radishes, dolmades, and anchovies/sardines are common."/>
            <Card image={lemonDessert} name="Lemon Dessert" desc="In an American-style Greek salad, lettuce, tomatoes, feta (often served in multiple cube-shaped cuttings mixed with the vegetables), and olives are the most standard elements, but cucumbers, peperoncini (pickled hot peppers), bell peppers, onions, radishes, dolmades, and anchovies/sardines are common."/>
        </div>
    </div>
  )
}

export default Specials