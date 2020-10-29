import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { WithAuthentication } from "./WithAuthentication";

describe("with authentication", () => {
  it("should require logged in user", () => {
    const { getByTestId } = render(
      <WithAuthentication user={undefined} logInFunc={jest.fn()} />
    );

    expect(getByTestId("login-form")).toBeInTheDocument();
  });

  it("should render child component when user is logged in", () => {
    const { getByText } = render(
      <WithAuthentication
        user={{ name: "adam", tag: "@adam" }}
        logInFunc={jest.fn()}
      >
        user is logged in
      </WithAuthentication>
    );

    expect(getByText("user is logged in")).toBeInTheDocument();
  });

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
});
