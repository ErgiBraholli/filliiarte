import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders brand name", () => {
  render(<App />);
  expect(screen.getAllByText(/FilliiArtë/i).length).toBeGreaterThan(0);
});
