import { render, screen } from "@testing-library/react";
import RestaurantCard from "../src/components/RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {

  // Here we are passing the mockdata as a props because restaurantCard component using props as a resData
  render(<RestaurantCard resData={MOCK_DATA} />); 

  //And here searching the text from the mockdata that should render.
  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
