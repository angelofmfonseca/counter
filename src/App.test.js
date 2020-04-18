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

it("renders increment button", () => {
  const wrapper = shallow(<App />);
  const incrementButton = wrapper.find("[data-test='increment-button']");
  expect(incrementButton.length).toBe(1);
});

it("renders decrement button", () => {
  const wrapper = shallow(<App />);
  const decrementButton = wrapper.find("[data-test='decrement-button']");
  expect(decrementButton.length).toBe(1);
});

it("renders clear button", () => {
  const wrapper = shallow(<App />);
  const clearButton = wrapper.find("[data-test='clear-button']");
  expect(clearButton.length).toBe(1);
});

it("renders counter display", () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

it("counter starts at 0", () => {
  const wrapper = shallow(<App />);
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

it("clicking + button increments the counter display", () => {
  const wrapper = shallow(<App />);

  const counterState = wrapper.state("counter");
  if (counterState) {
    wrapper.setState(counterState);
    return wrapper;
  }

  const incrementButton = wrapper.find("[data-test='increment-button']");
  incrementButton.simulate("click");

  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.text()).toContain(counterState + 1);
});

it("clicking - button decrements the counter display", () => {
  const wrapper = shallow(<App />);

  const counterState = wrapper.state("counter");
  if (counterState) {
    wrapper.setState(counterState);
    return wrapper;
  }

  const decrementButton = wrapper.find("[data-test='decrement-button']");
  decrementButton.simulate("click");

  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.text()).toContain(counterState - 1);
});

it("clicking clear button sets the counter display back to 0", () => {
  const wrapper = shallow(<App />);

  const counterState = wrapper.state("counter");
  if (counterState) {
    wrapper.setState(counterState);
    return wrapper;
  }

  const clearButton = wrapper.find("[data-test='clear-button']");
  clearButton.simulate("click");

  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.text()).toContain(0);
});
