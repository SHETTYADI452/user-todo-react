import { mount, shallow } from "enzyme";
import { UserDetails } from "../../Components/UserDetails";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  get: () => ({
    data: {
      items: [
        {
          id: 1,
          name: "test 1",
        },
      ],
    },
  }),
}));
const users = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    city: "Mumbai",
  },
  company: {
    name: "Roma-Cro",
  },
};

jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  get: () => ({
    data: users,
  }),
}));

describe("Testing UserDetails component", () => {
  let wrapper;

  const title = "User Details Page";

  const historyMock = { push: jest.fn() };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <UserDetails />
      </Router>
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a page title with text User Details Page", () => {
    const pageTitleElement = wrapper.find("#page-title");
    expect(pageTitleElement.text()).toBe(title);
  });

  it("should return null if no todo text exist in state", () => {
    wrapper.find("#add-btn").simulate("click");
  });

  it("should show the value that user types inside the Text Field of adding to do", () => {
    const userTodoInput = wrapper.find("#todo-input-element");
    userTodoInput.simulate("change", { target: { value: "add a test" } });
    expect(wrapper.find("#todo-input-element").prop("value")).toBe(
      "add a test"
    );
    wrapper.find("#add-btn").simulate("click");
  });
});
