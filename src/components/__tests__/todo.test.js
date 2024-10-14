import { render, screen, cleanup } from '@testing-library/react';
import TodoList from '../todo';
import renderer from "react-test-renderer"

afterEach(() => {
  cleanup()
})

it('should render non-completed todo component', () => {

  const todoItemToCheck = { id: 1, title: "wash dishes", completed: false };
  // expect(true).toBe(true);
  render(<TodoList todo={todoItemToCheck} />)
  
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");
  expect(todoElement).not.toContainHTML('strike')
});

it("should render completed todo component", () => {
  const todoItemToCheck2 = { id: 2, title: "clean the floor", completed: true };
  render(<TodoList todo={todoItemToCheck2} />)
  
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("clean the floor")
  expect(todoElement).toContainHTML("strike");
})

//using snapshot

test("matches snapshot", () => {
  const firstTodo = { id: 3, title: "make dinner", completed: true };
  const rendererTree = renderer.create(<TodoList todo={firstTodo} />)
  // console.log(rendererTree)
  expect(rendererTree).toMatchSnapshot();
})