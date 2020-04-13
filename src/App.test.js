import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

it("renders increment button", () => {});

it("renders decrement button", () => {});

it("renders clear button", () => {});

it("renders counter display", () => {});

it("conter starts at 0", () => {});

it("clicking + button increments the counter display", () => {});

it("clicking - button decrements the counter display", () => {});

it("clicking clear button sets the counter display back to 0", () => {});
