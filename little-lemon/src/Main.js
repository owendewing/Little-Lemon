import BookingPage from "./BookingPage.js";
import Homepage from "./Homepage.js";
import { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchAPI } from "./Api.js";
import ConfirmedBooking from "./ConfirmedBooking.js";

function updateTimes(state, date) {
    return {availableTimes: fetchAPI(new Date(date))};
}

function Main() {
    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking"
          element={<BookingPage
            availableTimes={state}
            dispatch = {dispatch}
            />}
            />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Main;