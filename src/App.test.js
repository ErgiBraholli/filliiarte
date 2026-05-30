import { render, screen } from "@testing-library/react";
import App from "./App";

// Lenis ships ESM-only and isn't transformed by CRA's Jest; mock it for the
// smoke test (smooth scrolling isn't what we're asserting here).
jest.mock("lenis", () =>
  class Lenis {
    raf() {}
    destroy() {}
    scrollTo() {}
    on() {}
  }
);

test("renders the brand name", () => {
  render(<App />);
  expect(screen.getAllByText(/Filli i Artë/i).length).toBeGreaterThan(0);
});
