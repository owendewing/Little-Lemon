import BookingPage from "./BookingPage.js";
import Homepage from "./HomePage.js";
import { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from "./Api.js";
import ConfirmedBooking from "./ConfirmedBooking.js";

function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
}

function Main() {
    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);

    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/booking"
                        element={<BookingPageWithNavigate state={state} dispatch={dispatch} />}
                    />
                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                </Routes>
            </Router>
        </main>
    );
}

function BookingPageWithNavigate({ state, dispatch }) {
    console.log(state.availableTimes);
    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }
    return (
        <BookingPage
            availableTimes={state}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );
}
export default Main;
