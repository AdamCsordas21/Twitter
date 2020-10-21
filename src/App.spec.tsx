import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { TweetModel } from "./";

describe("main page", () => {
  it("should render main section", () => {
    const { getByTestId } = render(<App initialTweets={[]} />);
    const mainElement = getByTestId("main-section");
    expect(mainElement).toBeInTheDocument();
  });

  describe("tweet section", () => {
    const dummyTweets: TweetModel[] = [
      {
        author: { name: "Adam", tag: "@AdamCsordas21" },
        body: "Hello Twitter World",
        createdOn: "32 mins ago",
      },
      {
        author: { name: "Osh", tag: "@oshdev" },
        body: "Hello Adam",
        createdOn: "32 mins ago",
      },
    ];

    it("should render tweets", () => {
      const { getAllByTestId } = render(<App initialTweets={dummyTweets} />);
      expect(getAllByTestId("tweet")).toHaveLength(2);
    });

    it("should let user create new tweet", () => {
      const { getByText, getByPlaceholderText, getByTestId } = render(
        <App initialTweets={[]} />
      );

      userEvent.type(
        getByPlaceholderText("What's happening?"),
        "new tweet body"
      );
      userEvent.click(getByText("Tweet"));

      expect(getByTestId("tweet")).toBeInTheDocument();
    });

    it("should not erase existing tweets when creating new one", () => {
      const { getByText, getByPlaceholderText, getAllByTestId } = render(
        <App initialTweets={dummyTweets} />
      );

      userEvent.type(
        getByPlaceholderText("What's happening?"),
        "new tweet body"
      );
      userEvent.click(getByText("Tweet"));

      expect(getAllByTestId("tweet")).toHaveLength(dummyTweets.length + 1);
    });

    it("should clear the input field after creating a tweet", () => {
      const { getByText, getByPlaceholderText } = render(
        <App initialTweets={[]} />
      );

      userEvent.type(
        getByPlaceholderText("What's happening?"),
        "some input body"
      );
      userEvent.click(getByText("Tweet"));

      expect(getByPlaceholderText("What's happening?")).toBeEmpty();
    });
  });
});
