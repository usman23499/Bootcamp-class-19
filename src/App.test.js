import { render, screen } from '@testing-library/react';
import App from './App';

test('Check Hello', () => { // set title
  render(<App />); // kon sa compoent test
  const linkElement = screen.getByText(/hello/i); // set test data and i mean koe bhi case ho small or large
  expect(linkElement).toBeInTheDocument(); // hum expect karraha honke ye document pe hai na
});


test("Check World ",()=>{
  render(<App />);
  const Check_world= screen.getByText(/world/i);
  expect(Check_world).toBeInTheDocument();
})

test('Test placeholder ',()=>{
  render(<App/>);
  const place=screen.getByPlaceholderText(/enter name/i);
  expect(place).toBeInTheDocument();
})