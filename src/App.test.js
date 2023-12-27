import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("AI generated img");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("testing the input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("Enter user name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "Rakesh Kundu");
});
