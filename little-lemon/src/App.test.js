import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

const mockAvailableTimes = { availableTimes: ["17:00", "18:00", "19:00"] };
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();


test("Text in Booking Form", () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={mockAvailableTimes} />
    </MemoryRouter>
  );
  const chooseDate = screen.getByText("Choose date:");
  expect(chooseDate).toBeInTheDocument();
  const chooseTime = screen.getByText("Choose time:");
  expect(chooseTime).toBeInTheDocument();
  const chooseGuests = screen.getByText("Number of guests:");
  expect(chooseGuests).toBeInTheDocument();
  const chooseOccasion = screen.getByText("Occasion:");
  expect(chooseOccasion).toBeInTheDocument();
  expect(screen.getByText("17:00")).toBeInTheDocument();
  expect(screen.getByText("18:00")).toBeInTheDocument();
  expect(screen.getByText("19:00")).toBeInTheDocument();
});

test("UpdateTimes function", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={() => {}} />
    </MemoryRouter>);
  expect(screen.getByText("17:00")).toBeInTheDocument();
  expect(screen.getByText("18:00")).toBeInTheDocument();
  expect(screen.getByText("19:00")).toBeInTheDocument();
  const chooseDate = screen.getByLabelText("Choose date:");
  expect(chooseDate).toBeInTheDocument();
  fireEvent.change(chooseDate, {target: {value: "2024-08-22"}});
  expect(mockDispatch).toHaveBeenCalledWith("2024-08-22");
  expect(screen.getByText("17:00")).toBeInTheDocument();
  expect(screen.getByText("18:00")).toBeInTheDocument();
  expect(screen.getByText("19:00")).toBeInTheDocument();
});

test("Form Validation", () => {
  window.alert = jest.fn();
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm} />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText(/Make Your reservation/i));
  expect(window.alert).toHaveBeenCalledWith("Please select a date before submitting.");
  window.alert.mockClear();
  const chooseDate = screen.getByLabelText("Choose date:");
  fireEvent.change(chooseDate, { target: { value: "2024-08-22" } });
  fireEvent.click(screen.getByText(/Make Your reservation/i));
  expect(window.alert).toHaveBeenCalledWith("Please select the number of guests before submitting.");
  window.alert.mockClear();
  fireEvent.change(chooseDate, { target: { value: "2024-08-22" } });
  const chooseGuests = screen.getByLabelText("Number of guests:");
  fireEvent.change(chooseGuests, { target: { value: "10" } });
  fireEvent.click(screen.getByText(/Make Your reservation/i));
});