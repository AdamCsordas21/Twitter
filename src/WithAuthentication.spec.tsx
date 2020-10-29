import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { User } from ".";
import { WithAuthentication } from "./WithAuthentication";

describe("with authentication", () => {
  it("should call log in function with username and password", () => {
    const user = "adam";
    const pass = "secret";
    const loggingInSpy = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <WithAuthentication logInFunc={loggingInSpy} />
    );

    userEvent.type(getByPlaceholderText("user"), user);
    userEvent.type(getByPlaceholderText("password"), pass);
    userEvent.click(getByText("log in"));

    expect(loggingInSpy).toHaveBeenCalledWith(user, pass);
  });

  it("should handle unsuccessful login attempt", () => {
    const loggingInStub = jest.fn(() => null);

    const { getByText } = render(
      <WithAuthentication logInFunc={loggingInStub} />
    );

    userEvent.click(getByText("log in"));

    expect(getByText("Invalid user credentials")).toBeInTheDocument();
  })

  it("should show children after successful login", () => {
    const user: User = {
      name: "adam",
      tag: "@adam",
    };
    const loggingInStub = jest.fn(() => user);

    const { getByText } = render(
      <WithAuthentication logInFunc={loggingInStub}>
        logged in
      </WithAuthentication>
    );

    userEvent.click(getByText("log in"));

    expect(getByText("logged in")).toBeInTheDocument();
  });
});
