import React from "react";
import { render } from "@testing-library/react";
import { Author } from "./";
import Tweet, { InteractionButton } from "./Tweet";
import { dummyIcon } from "./font-awesome";

describe("tweets", () => {
  it("should render tweets", () => {
    const author: Author = { name: "Adam", tag: "@AdamCsordas21" };
    const body = "Hello Twitter World";
    const createdOn = new Date(2000, 0, 31, 5, 45, 55, 123).toJSON();

    const { getByText } = render(
      <Tweet author={author} body={body} createdOn={createdOn} shares={[]} />
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

describe("Tweet interaction button", () => {
  it("increases count by one when clicked", () => {
    const count = 4;
    const { getByTestId, getByText } = render(
      <InteractionButton
        activeColour="colour"
        title="action"
        label="label"
        icon={dummyIcon}
        itemCount={count}
        countIncludesMe={false}
      />
    );

    getByTestId("action-button").click();

    expect(getByText("5")).toBeInTheDocument();
  });

  it("decreases the count by one when clicked again", () => {
    // Let's decide if we want to have an ability to "save" like action, ie. put it in the initial JSON
    const count = 5;
    const { getByTestId, getByText } = render(
      <InteractionButton
        activeColour="colour"
        title="action"
        label="label"
        icon={dummyIcon}
        itemCount={count}
        countIncludesMe={true}
      />
    ); 

    getByTestId("action-button").click();
 
    expect(getByText("4")).toBeInTheDocument(); 
  });

  it.todo("highlights when user interacted");
});
