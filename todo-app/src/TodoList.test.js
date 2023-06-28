import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// smoke test
test("renders without crashing", () => {
  render(<TodoList />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new item", function () {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no items yet
  expect(queryByText("feed cats")).not.toBeInTheDocument();

  const todoInput = getByLabelText("Todo:");
  const submitBtn = queryByText("Add");

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "feed cats" } });
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("feed cats")).toBeInTheDocument();
});
it("can delete an item", function () {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no items yet
  expect(queryByText("feed cats")).not.toBeInTheDocument();

  const todoInput = getByLabelText("Todo:");
  const submitBtn = queryByText("Add");

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "feed cats" } });
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("feed cats")).toBeInTheDocument();

  //   delete item
  const delButton = queryByText("X");
  fireEvent.click(delButton);

  //   deleted!
  expect(queryByText("feed cats")).not.toBeInTheDocument();
});
