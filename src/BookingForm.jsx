import { useState } from "react";
import { Link } from "react-router-dom";
import './BookingForm.css'

function BookingForm(props) {
    const [date,setDate]=useState(new Date())
    const [nog,setNog]=useState(1)
    const [occ,setOcc]=useState("Birthday")
    const [finalTime, setFinalTime] = useState(
      props.availableTimes.map((times) => <option>{times}</option>)
    );
    const handleDateChange = (e) => {
      setDate(e.target.value);
      var stringify = e.target.value;
      const date = new Date(stringify);
      props.updateTimes(date);
      setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    };
    const formData = {
      date: date,
      time: finalTime,
      nog : nog,
      occ : occ
    };
    function handleSubmit(e){
      e.preventDefault();
      props.submitForm(formData)
    }
    return (
      <div className='flex flex-col justify-evenly items-center text-2xl p-10 bg-form-bg bg-no-repeat bg-cover'>
          <form className=" max-w-lg  text-white p-5 text-center" onSubmit={handleSubmit}>
          <h1 className=' text-5xl text-center pb-10'>Booking Form</h1>
          <div className=" grid max-w-lg gap-5 grid-rows-4 grid-cols-2">
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
              <label htmlFor="res-time">Choose time</label>
              <select id="res-time">
                {finalTime}
              </select>
              <label htmlFor="guests">Number of guests</label>
              <input type="number" value={nog} min="1" max="10" id="guests" onChange={(e)=>setNog(e.target.value)}/>
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" value={occ} onChange={(e)=>setOcc(e.target.value)}>
                  <option>Birthday</option>
                  <option>Anniversary</option>
              </select>
            </div>
            <div ><Link to="/confirmation">
              <button className=" p-2 rounded bg-primary-yellow m-5">Book Table</button>
            </Link></div>
          </form>
      </div>
    )
  }

export default BookingForm;