import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

// describe is nothing but grouping the test case

describe("Contact US page Test Case", () => {
  // Testing heading in contact page
  it("Should load contact us component", () => {
    render(<Contact />); // This is render our contact page

    const heading = screen.getByRole("heading"); // This is used to find the heading in the screen (DOM)

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  // Testing button in contact page
  it("Should load button in contact component", () => {
    render(<Contact />); // This is used to  render our contact page

    const button = screen.getByRole("button"); // This is used to find the heading in the screen (DOM)

    //Assertion
    expect(button).toBeInTheDocument();
  });

  // Testing the input box
  it("Should load input boxes in contact component", () => {
    render(<Contact />); // This is used to  render our contact page

    const inputBoxes = screen.getAllByRole("textbox"); // This is used to find the heading in the screen (DOM)

    //Assertion
    expect(inputBoxes.length).toBe(3);
  });
});

/* Importent note
 * Whenever there is an multiple items we have to use (getAll...)
 * For single item on the screen use (getBy...)
 * 
 * ********************************************
 * This test and it both are same use can use any one of them 
 * 
 * test(()=>{})
 * it(()=>{})
 * 
 */
