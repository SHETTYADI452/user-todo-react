import { FETCH_USERS, SET_SELECTED_USER } from "../../actions/Types";
import { Users } from "../../reducers/users";

describe("Testing Users Reducer", () => {
  it("should return an empty array of users ", () => {
    const action = {
      type: FETCH_USERS,
    };
    const result = Users(undefined, action);
    expect(result.users).toBe(undefined);
  });

  it("should return an array with state of users", () => {
    const users = ["Test1"];
    const action = {
      type: FETCH_USERS,
      payload: users,
    };
    const result = Users({ users: [], user: {} }, action);
    expect(result.users).toBe(users);
  });

  it("should return an empty object of users ", () => {
    const action = {
      type: SET_SELECTED_USER,
    };
    const result = Users(undefined, action);
    expect(result.user).toBe(undefined);
  });

  it("should return an  object with state of users", () => {
    const user = { id: 1 };
    const action = {
      type: SET_SELECTED_USER,
      payload: user,
    };
    const result = Users({ users: [], user: {} }, action);
    expect(result.user).toBe(user);
  });

  it("should return for default", () => {
    const TEST = "TEST";
    const action = {
      type: TEST,
    };
    const result = Users(undefined, action);
    expect(result).toEqual(expect.objectContaining({ users: [], user: {} }));
  });
});
