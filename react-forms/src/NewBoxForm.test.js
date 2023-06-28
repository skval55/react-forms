import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// smoke test
test("renders without crashing", () => {
  render(<NewBoxForm addBox={() => console.log("test")} />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <NewBoxForm addBox={() => console.log("test")} />
  );
  expect(asFragment()).toMatchSnapshot();
});
