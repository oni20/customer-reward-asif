import { render, screen, cleanup } from "@testing-library/react";
import AlertMessage from "../AlertMessage/AlertMessage";

test("Should render Alert message component with success message", () => {
  const alertMessageProps = {
    severity: "success",
    message: "Hello",
  };
  render(<AlertMessage {...alertMessageProps} />);
  const AlertMessageElem = screen.getByTestId("alertMessage");
  expect(AlertMessageElem).toBeInTheDocument();

  expect(AlertMessageElem).toHaveTextContent("Success");
  expect(AlertMessageElem).toHaveTextContent(alertMessageProps.message);
});

test("Should render Alert message component with Error message", () => {
  const alertMessageProps = {
    severity: "error",
    message: "Hello",
  };
  render(<AlertMessage {...alertMessageProps} />);
  const AlertMessageElem = screen.getByTestId("alertMessage");
  expect(AlertMessageElem).toBeInTheDocument();

  expect(AlertMessageElem).toHaveTextContent("Error");
  expect(AlertMessageElem).toHaveTextContent(alertMessageProps.message);
});
