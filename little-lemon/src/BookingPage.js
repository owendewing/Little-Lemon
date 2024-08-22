import BookingForm from "./BookingForm";

function BookingPage(props) {
    console.log(props.availableTimes);
    return(
        <BookingForm 
        availableTimes = {props.availableTimes}
        dispatch = {props.dispatch}
        submitForm = {props.submitForm}
        ></BookingForm>
    )
}

export default BookingPage;