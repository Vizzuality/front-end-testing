import React from "react";
import { shallow } from "enzyme";
import { shallowToJson  } from 'enzyme-to-json';

import renderer from "react-test-renderer";

import Component from ".";

// Component elements
const formErrors = <ul className="errors" />;
const formSuccess = <div className="payment-success"></div>;

const todosTitle = (n) => `Todoss (${n})`;

describe("Todos component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Component />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("starts with a todo list with one item available and an empty input", () => {
    const todoTitle = <h2>{todosTitle(1)}</h2>;
    const todos = wrapper.find("ul.list");

    expect(wrapper.contains(todoTitle)).toEqual(true);
    expect(todos.props().children.length).toBe(1);
  });

  it("starts with an empty input", () => {
    const input = wrapper.find("input.input");
    expect(input.props().type).toEqual("text");
    expect(input.props().value.length).toBe(0);
    expect(input.props().placeholder).toEqual("Add new todo");
  });

  it("When adding a NEW todo, todos not done should equal 2", () => {
    const todoTitle = <h2>{todosTitle(2)}</h2>;
    const form = wrapper.find("form.add-todo");
    const input = wrapper.find("input.input");

    input.simulate("change", { target: { value: "Buy paper" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(wrapper.contains(todoTitle)).toEqual(true);

    const todos = wrapper.find("ul.list");
    expect(todos.props().children.length).toBe(2);
  });

  it("When Checking a todo, items not done should equal 0", () => {
  const todoTitle = <h2>{todosTitle(0)}</h2>;
    let checkbox, todo;

    todo = wrapper.find("li.todo").first();
    checkbox = todo.find('input[type="checkbox"]');

    expect(todo.props().className).not.toContain("-done");

    // Simulate checking todo is "done"
    checkbox.simulate("change");

    todo = wrapper.find("li.todo").first();
    checkbox = todo.find('input[type="checkbox"]');

    expect(wrapper.contains(todoTitle)).toEqual(true);
    expect(checkbox.props().checked).toBe(true);
    expect(todo.props().className).toContain("-done");
  });
});
