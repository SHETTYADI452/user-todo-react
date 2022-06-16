import { fetchUsers, setSelectedUser } from "../../actions/users";
import {
  SET_SELECTED_USER,
  FETCH_USERS,
  START_LOADING,
  STOP_LOADING,
} from "../../actions/Types";
import axios from "axios";

describe("Testing user action", () => {
  const dispatchMock = jest.fn();
  const loadingDispatchMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call dispatch with setSelected type ", async () => {
    const userData = {
      name: "Test",
    };
    jest.spyOn(axios, "get").mockResolvedValue({ data: userData });

    await setSelectedUser()(dispatchMock, loadingDispatchMock);
    expect(loadingDispatchMock).toHaveBeenCalledWith({
      type: START_LOADING,
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: SET_SELECTED_USER,
      payload: userData,
    });
    expect(loadingDispatchMock).toHaveBeenCalledWith({
      type: STOP_LOADING,
    });
  });

  it("should Throw Error For setselectedUser", async () => {
    const data = {
      message: "some error",
    };

    jest.spyOn(axios, "get").mockRejectedValue({ ...data });

    await setSelectedUser()(dispatchMock, loadingDispatchMock);
  });

  it("should call dispatch with fetchUsers type ", async () => {
    const data = {
      items: [
        {
          id: 1,
          name: "TEst1",
        },
      ],
    };

    jest.spyOn(axios, "get").mockResolvedValue({ data });

    await fetchUsers()(dispatchMock, loadingDispatchMock);
    expect(loadingDispatchMock).toHaveBeenCalledWith({
      type: START_LOADING,
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: FETCH_USERS,
      payload: data,
    });
    expect(loadingDispatchMock).toHaveBeenCalledWith({
      type: STOP_LOADING,
    });
  });

  it("should Throw Error For Fetch User", async () => {
    const data = {
      message: "some error",
    };

    jest.spyOn(axios, "get").mockRejectedValue({ ...data });

    await fetchUsers()(dispatchMock, loadingDispatchMock);
  });
});
