import Nav from "./Nav";
import { useState } from "react";

function BookingForm(props) {

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        props.dispatch({type: "UPDATE_TIMES", date: selectedDate});
    }
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    const handleGuests = (e) => {
        setGuests(e.target.value);
    }

    const handleOccasion = (e) => {
        setOccasion(e.target.value);
    }

    return(
        <>
        <Nav></Nav>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange = {handleDateChange}/>

            <label htmlFor="res-time">Choose time:</label>
            <select id="res-time" value={props.selectedTime} onChange = {props.handleSelectedTime}>
            {props.availableTimes.map((time) => (
                        <option key={time.label} value={time.value}>
                            {time.label}</option>))}
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