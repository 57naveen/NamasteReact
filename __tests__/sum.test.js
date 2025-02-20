import { sum } from "../src/components/sum";


test("Sum function should calculate the sum of two numbers",()=>{

  const result = sum(3,4) // Calling the sum function and passing the argument

  //Assertion
  expect(result).toBe(7);

});