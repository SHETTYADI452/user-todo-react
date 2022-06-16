import { startLoading, stopLoading } from "../../actions/loading";
import { START_LOADING, STOP_LOADING } from "../../actions/Types";

describe("Testing loading actions", () => {
  const dispatchMock = jest.fn();
  it("should call dispatch with type START_LOADING", () => {
    startLoading()(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: START_LOADING,
    });
  });
  it("should call dispatch with type STOP_LOADING", () => {
    stopLoading()(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: STOP_LOADING,
    });
  });
});
