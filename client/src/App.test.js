import React from "react";
import { render, getByText} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
});

test("Header is visible", () => {
  const { getByText } = render(<App />);
  const header = getByText("Women's World Cup");
  expect(header).toBeInTheDocument();
  expect(header).toBeVisible();
})