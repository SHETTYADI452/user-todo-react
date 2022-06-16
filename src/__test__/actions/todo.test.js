import { fetchTodo, addNewTodo } from "../../actions/todo";
import {
  FETCH_USER_TODO,
  START_LOADING,
  STOP_LOADING,
  ADD_NEW_TODO,
} from "../../actions/Types";
import axios from "axios";

describe("Testing Todo action", () => {
  const dispatchMock = jest.fn();
  const loadingDispatchMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call dispatch with fetchTodo type ", async () => {
    const data = {
      items: [
        {
          id: 1,
          name: "TEst1",
        },
      ],
    };

    jest.spyOn(axios, "get").mockResolvedValue({ data });

    await fetchTodo()(dispatchMock, loadingDispatchMock);
    expect(loadingDispatchMock).toHaveBeenCalledWith({
      type: START_LOADING,
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: FETCH_USER_TODO,
      payload: data,
    });
    expect(loadingDispatchMock).toHaveBeenCalledWith({
      type: STOP_LOADING,
    });
  });

  it("should Throw Error For Fetch User Todo", async () => {
    const data = {
      message: "some error",
    };

    jest.spyOn(axios, "get").mockRejectedValue({ ...data });

    await fetchTodo()(dispatchMock, loadingDispatchMock);
  });

  it("should call dispatch with ADD_NEW_TODO type ", async () => {
    const data = {
      id: 1,
      name: "Test1",
    };

    jest.spyOn(axios, "post").mockResolvedValue({ data });

    await addNewTodo(data)(dispatchMock, loadingDispatchMock);
    expect(loadingDispatchMock).toHaveBeenCalledWith({
      type: START_LOADING,
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: ADD_NEW_TODO,
      payload: data,
    });
    expect(loadingDispatchMock).toHaveBeenCalledWith({
      type: STOP_LOADING,
    });
  });

  it("should Throw Error For Add new User Todo", async () => {
    const data = {
      message: "some error",
    };

    jest.spyOn(axios, "post").mockRejectedValue({ ...data });

    await addNewTodo()(dispatchMock, loadingDispatchMock);
  });
});
