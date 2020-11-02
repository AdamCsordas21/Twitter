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
    const user: User = {
      name: "adam",
      tag: "@adam",
    };
    const loggingInStub = jest.fn(() => user);

    const { getByText } = render(
      <WithLoginForm logInFunc={loggingInStub}>logged in</WithLoginForm>
    );

    userEvent.click(getByText("log in"));

    expect(getByText("logged in")).toBeInTheDocument();
  });
});

describe("with authentication", () => {
  it("should handle unsuccessful login attempt", () => {
    const fakeUser: UserAuth = {
      name: "adam",
      passwordSalt: "salt",
      passwordHash: "hash",
    };

    const users: User[] = [];
    const userCreds: UserAuth[] = [];
    const findUserDummy = jest.fn(() => fakeUser);
    const isValidPasswordStub = jest.fn(() => false);

    const { getByText, queryByText } = render(
      <WithAuthentication
        users={users}
        userCreds={userCreds}
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
    const userAuth: UserAuth = {
      name: "adam",
      passwordSalt: "salt",
      passwordHash: "hash",
    };

    const users: User[] = [];
    const userCreds: UserAuth[] = [userAuth];
    const findUserDummy = jest.fn(() => userAuth);
    const isValidPasswordStub = jest.fn(() => true);

    const { getByText, queryByText } = render(
      <WithAuthentication
        users={users}
        userCreds={userCreds}
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
