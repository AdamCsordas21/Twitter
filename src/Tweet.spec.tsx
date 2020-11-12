import React from "react";
import { render } from "@testing-library/react";
import { Author } from "./";
import Tweet from "./Tweet";

describe("tweets", () => {
  it("should render tweets", () => {
    const author: Author = { name: "Adam", tag: "@AdamCsordas21" };
    const body = "Hello Twitter World";
    const createdOn = new Date(2000, 0, 31, 5, 45, 55, 123).toJSON();

    const { getByText } = render(
      <Tweet author={author} body={body} createdOn={createdOn} />
    );
    expect(getByText(author.name, { exact: false })).toBeInTheDocument();
    expect(getByText(author.tag, { exact: false })).toBeInTheDocument();
    expect(getByText(body)).toBeInTheDocument();
    expect(getByText("31/01/2000")).toBeInTheDocument();
  });

  // const stubTweet: TweetModel = {
  //   author: { name: "Adam", tag: "@adam" },
  //   body: "hello",
  //   createdOn: "2020-11-12T19:23:29.463Z",
  // };

  // it("should allow to like a tweet", () => {
  //   const { getByTitle, getByText } = render(
  //     <Tweet {...stubTweet} likes={0} />
  //   );
  //   const likeButton = getByTitle("like");

  //   likeButton.click();

  //   expect(getByText("1")).toBeInTheDocument();
  // });
});
