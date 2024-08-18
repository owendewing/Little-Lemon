import BookingPage from "./BookingPage.js";
import Homepage from "./Homepage.js";
import { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchAPI } from "./Api.js";

function updateTimes(state, date) {
    return {availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};
}


function Main() {
    const initialState = {availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
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
        </Routes>
      </Router>
    </main>
  );
}

export default Main;