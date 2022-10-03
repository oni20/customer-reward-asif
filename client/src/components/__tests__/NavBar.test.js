import { render, screen, cleanup } from "@testing-library/react";
import NavBar from "../NavBar/NavBar";

test("Should render NavBar component with success message", () => {
  render(<NavBar />);

  const NavBarElem = screen.getByTestId("navBar");
  expect(NavBarElem).toBeInTheDocument();
  expect(NavBarElem).toHaveTextContent("Customer Reward Program");
});