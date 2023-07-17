import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the expected initial state', () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same value as the provided state', () => {
  const state = ['17:00', '18:00', '19:00'];
  const updatedState = updateTimes(state);
  expect(updatedState).toEqual(state);
});
