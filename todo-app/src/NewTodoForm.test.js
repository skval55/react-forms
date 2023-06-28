import { render, screen } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// smoke test
test("renders without crashing", () => {
  render(<NewTodoForm addTask={() => console.log("test")} />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <NewTodoForm addTask={() => console.log("test")} />
  );
  expect(asFragment()).toMatchSnapshot();
});
