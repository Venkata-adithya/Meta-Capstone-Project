import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import React from "react";

test('Checking Little lemon in hero section', () => {
  render(<Hero/>);
  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
});