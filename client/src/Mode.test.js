import React from "react";
import { render, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Mode } from "./Mode";

test("Mode renders without crashing", () => {
  render(<Mode />);
});

test("Mode component is visible to the user", () => {
  const { getByText } = render(<Mode />);
  const modeElement = getByText(/mode/i);
  expect(modeElement).toBeInTheDocument();
  expect(modeElement).toBeVisible();
});
