import renderer from "react-test-renderer";
import Users from "./Users";

test("component testing method", () => {
  const componentData = renderer.create(<Users />).getInstance();
  expect(componentData.getUserList()).toMatch("user list");
});
