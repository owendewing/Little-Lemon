import Nav from "./Nav";
import { useState } from "react";

function BookingForm() {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    const handleSelectedTime = (e) => {
        setTime(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

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
            <input type="date" value = {date} onChange = {handleDate} id="res-date" />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange = {handleSelectedTime}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
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