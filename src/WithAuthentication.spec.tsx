import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { User, UserAuth } from ".";
import { WithAuthentication, WithLoginForm } from "./WithAuthentication";

describe("with login form", () => {
  it("should call log in function with username and password", () => {
    const user = "adam";
    const pass = "secret";
    const loggingInSpy = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <WithLoginForm logInFunc={loggingInSpy} />
    );

    userEvent.type(getByPlaceholderText("user"), user);
    userEvent.type(getByPlaceholderText("password"), pass);
    userEvent.click(getByText("log in"));

    expect(loggingInSpy).toHaveBeenCalledWith(user, pass);
  });

  it("should show children after successful login", () => {
    const user: User = { name: "adam", tag: "@adam" };
    const loggingInStub = jest.fn(() => user);

    const { getByText } = render(
      <WithLoginForm logInFunc={loggingInStub}>logged in</WithLoginForm>
    );

    userEvent.click(getByText("log in"));

    expect(getByText("logged in")).toBeInTheDocument();
  });
});

describe("with authentication", () => {
  it("should display page contents upon successful log in", () => {
    const userName = "dummy user name";
    const foundUserDummy: UserAuth = {
      name: userName,
      passwordSalt: "salt",
      passwordHash: "hash",
    };

    const users: User[] = [{ name: userName, tag: "@tag" }];
    const findUserDummy = jest.fn(() => foundUserDummy);
    const isValidPasswordStub = jest.fn(() => true);

    const { getByText } = render(
      <WithAuthentication
        users={users}
        isValidPassword={isValidPasswordStub}
        findUser={findUserDummy}
      >
        logged in
      </WithAuthentication>
    );

    userEvent.click(getByText("log in"));

    expect(getByText("logged in")).toBeInTheDocument();
  });

  it("should handle unsuccessful login attempt", () => {
    const fakeUser: UserAuth = {
      name: "adam",
      passwordSalt: "salt",
      passwordHash: "hash",
    };

    const users: User[] = [];
    const findUserDummy = jest.fn(() => fakeUser);
    const isValidPasswordStub = jest.fn(() => false);

    const { getByText, queryByText } = render(
      <WithAuthentication
        users={users}
        isValidPassword={isValidPasswordStub}
        findUser={findUserDummy}
      >
        logged in
      </WithAuthentication>
    );

    userEvent.click(getByText("log in"));

    expect(queryByText("logged in")).not.toBeInTheDocument();
    expect(getByText("Invalid user credentials")).toBeInTheDocument();
  });

  it("should show error when user has authenticated, but their details are not found", () => {
    const foundUserDummy: UserAuth = {
      name: "adam",
      passwordSalt: "salt",
      passwordHash: "hash",
    };

    const users: User[] = [];
    const findUserDummy = jest.fn(() => foundUserDummy);
    const isValidPasswordStub = jest.fn(() => true);

    const { getByText, queryByText } = render(
      <WithAuthentication
        users={users}
        isValidPassword={isValidPasswordStub}
        findUser={findUserDummy}
      >
        logged in
      </WithAuthentication>
    );

    userEvent.click(getByText("log in"));

    expect(queryByText("logged in")).not.toBeInTheDocument();
    expect(getByText("User not found")).toBeInTheDocument();
  });
});
