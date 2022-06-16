import { mount, shallow } from "enzyme";
import Home from "../../../Components/Home";
import { UsersContext } from "../../../Contexts/Users";
import { LoadingContext } from "../../../Contexts/Loading";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const allUsers = [
  {
    id: 1,
    username: "user 1",
  },
  {
    id: 2,
    username: "user 2",
  },
  {
    id: 3,
    username: "user 3",
  },
];

describe("Testing Home component", () => {
  let wrapper;
  let secondaryWrapper;

  const title = "USERS LIST";

  beforeEach(() => {
    wrapper = mount(
      <UsersContext.Provider
        value={{
          state: {
            users: allUsers,
            user: {},
          },
          dispatch: jest.fn(),
        }}
      >
        <Home />
      </UsersContext.Provider>
    );
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should match the snapshot - shallow", () => {
    wrapper = shallow(<Home title={title} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot having loader while passing loading as true in the Loading Context", () => {
    secondaryWrapper = mount(
      <LoadingContext.Provider
        value={{
          state: { isLoading: true },
          dispatch: jest.fn(),
        }}
      >
        <UsersContext.Provider
          value={{
            state: {
              users: allUsers,
              user: {},
            },
            dispatch: jest.fn(),
          }}
        >
          <Home />
        </UsersContext.Provider>
      </LoadingContext.Provider>
    );

    expect(secondaryWrapper).toMatchSnapshot();
  });

  it("should have a page title with text Home", () => {
    const pageTitleElement = wrapper.find("#page-title");
    expect(pageTitleElement.text()).toBe(title);
  });

  it("should find the user 1 element from users list and clicking on it", () => {
    expect(wrapper.find(`#user-0`).length).toBe(1);
    wrapper.find(`#user-0`).simulate("click");
  });
});
