import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTweetSection from "./NewTweetSection";

describe('new tweet section', () => {
  it("should clear the input field after creating a tweet", () => {
    const { getByText, getByPlaceholderText } = render(
      <NewTweetSection tweets={[]} setTweets={jest.fn()} />
    );

    userEvent.type(
      getByPlaceholderText("What's happening?"),
      "some input body"
    );
    userEvent.click(getByText("Tweet"));

    expect(getByPlaceholderText("What's happening?")).toBeEmpty();
  });
})