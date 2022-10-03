import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../Footer/Footer";

test("Should render Footer component", () => {
  render(<Footer />);
  const FooterElement = screen.getByTestId("footer");
  const currentYear = new Date().getFullYear();

  expect(FooterElement).toBeInTheDocument();
  expect(FooterElement).toHaveTextContent(
    "Some descriptio here to give the footer a purpose!"
  );
  expect(FooterElement).toHaveTextContent(currentYear);
});
