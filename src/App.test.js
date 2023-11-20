import { render, screen } from "@testing-library/react";
import App from "./App";

test('Checking Little lemon in hero section', () => {
  render(<App/>);
  expect(screen.getByText("asdf")).toBeInTheDocument();
});
