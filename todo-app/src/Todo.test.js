import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

// smoke test
test("renders without crashing", () => {
  render(
    <Todo
      key="{task.id}"
      id="{task.id}"
      todo="{task.todo}"
      handleDelete={() => console.log("test")}
    />
  );
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Todo
      key="{task.id}"
      id="{task.id}"
      todo="{task.todo}"
      handleDelete={() => console.log("test")}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
