import { render } from "@testing-library/react";
import Box from "./Box";

// smoke test
test("renders without crashing", () => {
  render(
    <Box
      code="test code"
      height={60}
      width={60}
      backgroundColor="black"
      handleDelete={() => console.log("test")}
    />
  );
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Box
      code="test code"
      height={60}
      width={60}
      backgroundColor="black"
      handleDelete={() => console.log("test")}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
