import BookingPage from "./BookingPage.js";
import Homepage from "./Homepage.js";
import { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function initializeTimes() {
    return [
        {label: "17:00", value: "17:00"},
        {label: "18:00", value: "18:00"},
        {label: "19:00", value: "19:00"},
        {label: "20:00", value: "20:00"},
        {label: "21:00", value: "21:00"},
        {label: "22:00", value: "22:00"},
    ];
}

function updateTimes(state, action) {
    switch (action.type) {
        case "UPDATE_TIMES":
            return state;
        default:
            return state;
    }

}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(), initializeTimes);

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking"
          element={<BookingPage
            availableTimes={availableTimes}
            dispatch = {dispatch}
            />}
            />
        </Routes>
      </Router>
    </main>
  );
}

export default Main;