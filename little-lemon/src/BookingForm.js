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
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange = {handleDate} value={date} required/>

            <label htmlFor="res-time">Choose time:</label>
            <select id="res-time" required>
            {props.availableTimes.availableTimes.map((time, index) => (<option key={index} value={time}>{time}</option>))};
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value = {guests} onChange = {handleGuests} required/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange = {handleOccasion} required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onClick={handleSubmit} />
        </form>
        </>
    );
}

export default BookingForm;