import Nav from "./Nav";
import { useState } from "react";

function BookingForm(props) {
    const handleSubmit = (e) => {
    if (!date) {
        alert("Please select a date before submitting.");
        return;
    }
    if (!guests) {
        alert("Please select the number of guests before submitting.")
        return;
    }
      e.preventDefault();
      props.submitForm(e);
    };
    const [date, setDate] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    const handleGuests = (e) => {
        setGuests(e.target.value);
    }

    const handleOccasion = (e) => {
        setOccasion(e.target.value);
    }

    function getDate() {
        const today = new Date();
        let month = today.getMonth() + 1;
        const year = today.getFullYear();
        let date = today.getDate();
        if (month < 10) {
          month = "0" + month;
        }
        if (date < 10) {
          date = "0" + date;
        }
        return `${year}-${month}-${date}`;
      }

    const handleDate = (e) => {
        const today = getDate();
        const selectedDate = e.target.value;
        if (new Date(today) > new Date(selectedDate)) {
            alert("Date cannot be in the past");
            setDate("");
        }
        else {
            setDate(selectedDate);
            props.dispatch(selectedDate)
        }
    }
    return(
        <>
        <Nav></Nav>
        <form onSubmit={handleSubmit}>
            <div class = "bookingform-style">
            <label className="bookingform-title" htmlFor="res-date">Choose date:</label>
            <input className="bookingform-input" type="date" id="res-date" onChange = {handleDate} value={date} required/>

            <label className="bookingform-title" htmlFor="res-time">Choose time:</label>
            <select className="bookingform-input" id="res-time" required>
            {props.availableTimes.availableTimes.map((time, index) => (<option key={index} value={time}>{time}</option>))};
            </select>

            <label className="bookingform-title" htmlFor="guests">Number of guests:</label>
            <input className="bookingform-input" type="number" placeholder="1" min="1" max="10" id="guests" value = {guests} onChange = {handleGuests} required/>

            <label className="bookingform-title" htmlFor="occasion">Occasion:</label>
            <select className="bookingform-input" id="occasion" value={occasion} onChange = {handleOccasion} required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input className="buttons" aria-label="On Click" type="submit" value="Make Your reservation"/>
            </div>
        </form>
        </>
    );
}

export default BookingForm;