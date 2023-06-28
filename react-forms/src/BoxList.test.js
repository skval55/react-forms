import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
test("renders without crashing", () => {
  render(<BoxList />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a box from the form", function () {
  const { getByLabelText, queryByText } = render(<BoxList />);

  expect(queryByText("X")).not.toBeInTheDocument();

  const heightInput = getByLabelText("height:");
  const widthInput = getByLabelText("width:");
  const backgroundColorInput = getByLabelText("Background Color:");
  const submitBtn = queryByText("Add a new box");

  fireEvent.change(heightInput, { target: { value: 60 } });
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(backgroundColorInput, { target: { value: "blue" } });
  fireEvent.click(submitBtn);

  expect(queryByText("X")).toBeInTheDocument();
});

it("can delete a box", function () {
  const { getByLabelText, queryByText } = render(<BoxList />);

  //   nothing in dom
  expect(queryByText("X")).not.toBeInTheDocument();

  const heightInput = getByLabelText("height:");
  const widthInput = getByLabelText("width:");
  const backgroundColorInput = getByLabelText("Background Color:");
  const submitBtn = queryByText("Add a new box");

  //   add box
  fireEvent.change(heightInput, { target: { value: 60 } });
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(backgroundColorInput, { target: { value: "blue" } });
  fireEvent.click(submitBtn);

  expect(queryByText("X")).toBeInTheDocument();

  //   click del button
  fireEvent.click(queryByText("X"));

  //   again nothing in dom
  expect(queryByText("X")).not.toBeInTheDocument();
});
