const { Provider } = require("react-redux");
const { BrowserRouter } = require("react-router-dom");
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../Redux/appStore";
import Header from "../src/components/Header";
import "@testing-library/jest-dom";

//Testing the login button on header
it("Should load Header Component with a Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  /*
   *   If you have mulitple button on the screen but you want specific button the you can give name
   *
   *  const loginButton = screen.getByRole("button",{name:"Login"});
   *
   */

  // Another way of get the button
  //const loginButton = screeen.getByText("Login")

  expect(loginButton).toBeInTheDocument();
});

//Testing the Cart item
it("Should render Header Component with a Cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart(0)");

  expect(cartItems).toBeInTheDocument();
});

//testing cart using the regex
it("Should load Header Component with a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

//Test the login and logout button feature
it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //This is line used to get the login button
  const loginButton = screen.getByRole("button", { name: "Login" });

  //This is for click event
  fireEvent.click(loginButton);

  //This is line used to get the logout button
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
