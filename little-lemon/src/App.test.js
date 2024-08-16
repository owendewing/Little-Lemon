import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes } from './Main';
import { updateTimes } from './Main';

test('initializeTimes returns the correct array', () => {
  const expectedTimes = [
      { label: "17:00", value: "17:00" },
      { label: "18:00", value: "18:00" },
      { label: "19:00", value: "19:00" },
      { label: "20:00", value: "20:00" },
      { label: "21:00", value: "21:00" },
      { label: "22:00", value: "22:00" },
  ];

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});


test('updateTimes returns the same state when an unrecognized action is provided', () => {
  const initialState = [
    { label: "17:00", value: "17:00" },
    { label: "18:00", value: "18:00" },
    { label: "19:00", value: "19:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:00", value: "21:00" },
    { label: "22:00", value: "22:00" },
  ];
  const action = { type: "UNKNOWN_ACTION" };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});