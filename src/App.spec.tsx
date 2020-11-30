import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { TweetModel, User } from "./";
import { UserContext } from "./WithAuthentication";

describe("main page", () => {
  it("should render main section", () => {
    const { getByTestId } = render(<App initialTweets={[]} />);
    const mainElement = getByTestId("main-section");
    expect(mainElement).toBeInTheDocument();
  });

  const dummyTweets: TweetModel[] = [
    {
      author: { name: "Adam", tag: "@AdamCsordas21" },
      body: "Hello Twitter World",
      createdOn: "2020-11-01T18:16:23.045Z",
      "shares": []
    },
    {
      author: { name: "Osh", tag: "@oshdev" },
      body: "Hello Adam",
      createdOn: "2020-11-02T18:16:23.045Z",
      "shares": []
    },
  ];

  describe("new tweet section", () => {
    it("should let user create new tweet", () => {
      const user: User = {
        name: "userName",
        tag: "@userTag",
      };
      const { getByText, getByPlaceholderText, getByTestId } = render(
        <App initialTweets={[]} />,
        {
          wrapper: ({ children }) => (
            <UserContext.Provider value={user}>{children}</UserContext.Provider>
          ),
        }
      );

      userEvent.type(
        getByPlaceholderText("What's happening?"),
        "new tweet body"
      );
      userEvent.click(getByTestId("create-new-tweet-button"));

      expect(getByTestId("tweet")).toBeInTheDocument();
      expect(getByText("userName", { exact: false })).toBeInTheDocument();
      expect(getByText("@userTag", { exact: false })).toBeInTheDocument();
      expect(getByText("1m")).toBeInTheDocument();
    });

    it("should not erase existing tweets when creating new one", () => {
      const { getByTestId, getByPlaceholderText, getAllByTestId } = render(
        <App initialTweets={dummyTweets} />
      );

      userEvent.type(
        getByPlaceholderText("What's happening?"),
        "new tweet body"
      );
      userEvent.click(getByTestId("create-new-tweet-button"));

      expect(getAllByTestId("tweet")).toHaveLength(dummyTweets.length + 1);
    });
  });

  describe("tweet section", () => {
    it("should render tweets", () => {
      const { getAllByTestId } = render(<App initialTweets={dummyTweets} />);
      expect(getAllByTestId("tweet")).toHaveLength(2);
    });
  });
});
