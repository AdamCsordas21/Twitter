import React, { FC, useState } from "react";
import "./App.css";
import { TweetModel } from "./";
import Tweet from "./Tweet";
import Header from "./Header";
import NewTweetSection, { AddTweetFn } from "./NewTweetSection";
import SideNav from "./SideNav";
import styled from "styled-components";

interface AppProps {
  initialTweets: TweetModel[];
}

const FlexBox = styled.div`
  display: flex;
  justify-content: center;

`

const Main = styled.main`
  flex: 1 1 600px;
  max-width: 800px;
`

const App: FC<AppProps> = ({ initialTweets }) => {
  const [tweets, setTweets] = useState<TweetModel[]>(initialTweets);
  const addTweetFn: AddTweetFn = (newTweetBody: string) =>
    setTweets([
      ...tweets,
      {
        author: { name: "adam", tag: "@adam" },
        body: newTweetBody,
        createdOn: "now",
      },
    ]);

  return (
    <FlexBox>
      <SideNav />
      <Main data-testid="main-section">
        <Header />
        <NewTweetSection addTweet={addTweetFn} />
        {/* tweets */}
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </Main>
    </FlexBox>
  );
};

export default App;
