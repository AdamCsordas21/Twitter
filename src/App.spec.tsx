import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { TweetModel } from "./";

describe("main page", () => {
  it("should render main section", () => {
    const { getByTestId } = render(<App initialTweets={[]} />);
    const mainElement = getByTestId("main-section");
    expect(mainElement).toBeInTheDocument();
  });

  it("should render tweets", () => {
    const tweets: TweetModel[] = [
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

    const { getAllByTestId } = render(<App initialTweets={tweets} />);
    expect(getAllByTestId("tweet")).toHaveLength(2);
  });
});
