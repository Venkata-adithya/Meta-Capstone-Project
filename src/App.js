import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Header from './Header';
import Confirmation from './Confirmation';


function App() {
  return (
    
      <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path='/confirmation' element={<Confirmation/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
