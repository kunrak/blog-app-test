import { render } from "@testing-library/react";
import App from "./App";

test("snapshot for app component", () => {
  const snapContainer = render(<App />);
  expect(snapContainer).toMatchSnapshot();
});
