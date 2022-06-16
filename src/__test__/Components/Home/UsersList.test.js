import React from "react";
import { mount } from "enzyme";
import { UsersList } from "../../../Components/Home/UsersList";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe.only("Testing for the UsersList Component ", () => {
  let wrapper;
  const onUserClick = jest.fn();
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

  const defaultProps = {
    allUsers,
    onUserClick,
  };

  beforeEach(() => {
    wrapper = mount(<UsersList {...defaultProps} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should check for the users list Container", () => {
    expect(wrapper.find(".users-list-container")).toBeTruthy();
    expect(wrapper.find(".users-list-container")).toHaveLength(1);
  });
  it("should check the mapping of the users list", () => {
    allUsers?.map((user, index) => {
      expect(wrapper.find(`#user-${index}`).length).toBe(1);
      expect(wrapper.find(`#user-${index}`).text()).toEqual(
        `${user.id}. ${user.username}`
      );
      wrapper.find(`#user-${index}`).simulate("click");

      const userLink = wrapper.find(`#user-${index}`);
      userLink.simulate("click");
      expect(onUserClick).toHaveBeenCalledWith(allUsers[0]);
    });
  });
});
