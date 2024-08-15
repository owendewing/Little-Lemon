import BookingPage from "./BookingPage.js";
import Homepage from "./Homepage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Main;