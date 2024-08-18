import Nav from "./Nav";
import { useState } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    const handleGuests = (e) => {
        setGuests(e.target.value);
    }

    const handleOccasion = (e) => {
        setOccasion(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    return(
        <>
        <Nav></Nav>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange = {handleDate} value={date}/>

            <label htmlFor="res-time">Choose time:</label>
            <select id="res-time">
            {props.availableTimes.availableTimes.map((time, index) => (<option key={index} value={time}>{time}</option>))};
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value = {guests} onChange = {handleGuests} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange = {handleOccasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
        </>
    );
}

export default BookingForm;