import { START_LOADING, STOP_LOADING } from "../../actions/Types";
import { Loading } from "../../reducers/loading";

describe("Testing Loading Reducer", () => {
  it("should return an object with isLoading set to true", () => {
    const action = {
      type: START_LOADING,
    };
    const result = Loading(undefined, action);
    expect(result.isLoading).toBe(true);
  });
  it("should return an object with isLoading set to true with initial state of loading being false", () => {
    const action = {
      type: START_LOADING,
    };
    const result = Loading({ isLoading: false }, action);
    expect(result.isLoading).toBe(true);
  });
  it("should return an object with isLoading set to false", () => {
    const action = {
      type: STOP_LOADING,
    };
    const result = Loading(undefined, action);
    expect(result.isLoading).toBe(false);
  });
  it("should return an object with isLoading set to false with initial state of loading being true", () => {
    const action = {
      type: STOP_LOADING,
    };
    const result = Loading({ isLoading: true }, action);
    expect(result.isLoading).toBe(false);
  });

  it("should return an object with isLoading set to false for default", () => {
    const TEST = "TEST";
    const action = {
      type: TEST,
    };
    const result = Loading({ isLoading: true }, action);
    expect(result.isLoading).toBe(true);
  });
});
