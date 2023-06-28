import { render, screen } from "@testing-library/react";
import App from "./App";

// smoke test
test("renders without crashing", () => {
  render(<App />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
