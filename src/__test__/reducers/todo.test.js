import { FETCH_USER_TODO, ADD_NEW_TODO } from "../../actions/Types";
import { Todo } from "../../reducers/todo";

describe("Testing Todo Reducer", () => {
  it("should return an empty array of Todos ", () => {
    const action = {
      type: FETCH_USER_TODO,
    };
    const result = Todo(undefined, action);
    expect(result.todos).toBe(undefined);
  });

  it("should return an array with state of todos", () => {
    const todos = ["Test1"];
    const action = {
      type: FETCH_USER_TODO,
      payload: todos,
    };
    const result = Todo({ todos: [] }, action);
    expect(result.todos).toBe(todos);
  });

  it("should return for default", () => {
    const TEST = "TEST";
    const action = {
      type: TEST,
    };
    const result = Todo(undefined, action);
    expect(result).toEqual(expect.objectContaining({ todos: [] }));
  });

  it("should return an array with updated state of todoList", () => {
    const todoData = { id: 4, name: "Test1" };

    const action = {
      type: ADD_NEW_TODO,
      payload: todoData,
    };
    const initialState = {
      todos: [{ id: 1, name: "Test2" }],
    };
    const result = Todo(initialState, action);

    const todoList = [{ id: 1, name: "Test2" }, todoData];

    expect(result.todos).toStrictEqual(todoList);
  });

  it("should return state", () => {
    const state = {
      todos: [{ id: 1, name: "Test" }],
    };
    const TEST = "TEST";
    const action = {
      type: TEST,
      payload: state.todos,
    };
    const result = Todo(state, action);
    expect(result).toStrictEqual(state);
  });
});
