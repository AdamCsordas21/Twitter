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

  describe("new tweet section", () => {
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
  })

  describe("tweet section", () => {
    it("should render tweets", () => {
      const { getAllByTestId } = render(<App initialTweets={dummyTweets} />);
      expect(getAllByTestId("tweet")).toHaveLength(2);
    });
  });
});
