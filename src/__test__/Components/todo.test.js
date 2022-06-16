import { mount } from "enzyme";
import { Todos } from "../../Components/UserDetails/todos";

describe("Testing TodoList component", () => {
  let wrapper;
  let secondaryWrapper;
  const todo = [
    {
      userId: 1,
      id: 1,
      title: "Test",
      completed: true,
    },
    {
      userId: 1,
      id: 2,
      title: "Test2",
      completed: false,
    },
  ];

  beforeEach(() => {
    wrapper = mount(<Todos todos={todo} />);
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should check for loader existence", () => {
    secondaryWrapper = mount(<Todos todos={todo} isLoading={true} />);
    expect(secondaryWrapper).toMatchSnapshot();
  });

  it("should have the todo in the list", () => {
    expect(wrapper.find(`#title-${todo[0].id}`).text()).toBe(todo[0].title);
  });

  it("should have a page loader", () => {
    const pageLoader = wrapper.find(".loader");
    expect(pageLoader).toBeTruthy;
  });
});
