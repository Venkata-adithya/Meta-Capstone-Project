import React, { useReducer } from 'react'
import BookingForm from './BookingForm';
import { fetchAPI,submitAPI } from "./bookingsApi";
import Footer from './Footer'

function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }
  function submitForm(formData){
    submitAPI(formData)
  }
  const output = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes ,output);
  return (
    <div className=''>
        <BookingForm updateTimes={dispatch} availableTimes={availableTimes} submitForm={submitForm}/>
        <Footer/>
    </div>
  )
}



export default BookingPage