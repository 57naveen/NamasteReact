import { render,screen } from "@testing-library/react"
import Contact from "../src/components/Contact"
import "@testing-library/jest-dom"


// Testing heading in contact page 
test("Should load contact us component",() => {

  render(<Contact />) // This is render our contact page 

  const heading = screen.getByRole("heading"); // This is used to find the heading in the screen (DOM)

  //Assertion
  expect(heading).toBeInTheDocument();

})


// Testing button in contact page 
test("Should load button in contact component",() => {

  render(<Contact />) // This is used to  render our contact page 

  const button = screen.getByRole("button"); // This is used to find the heading in the screen (DOM)

  //Assertion
  expect(button).toBeInTheDocument();

})

/* Importent note
 * Whenever there is an multiple items we have to use (getAll...)
 * For single item on the screen use (getBy...)
 */


// Testing the input box 
test("Should load input boxes in contact component",() => {

  render(<Contact />) // This is used to  render our contact page 

  const inputBoxes = screen.getAllByRole("textbox"); // This is used to find the heading in the screen (DOM)

  //Assertion
  expect(inputBoxes.length).toBe(3);

})

