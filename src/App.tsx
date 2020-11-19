import React, { FC, useContext, useState } from "react";
import "./App.css";
import { TweetModel, User } from "./";
import Tweet from "./Tweet";
import Header from "./Header";
import NewTweetSection, { AddTweetFn } from "./NewTweetSection";
import SideNav from "./SideNav";
import styled from "styled-components";
import { UserContext } from "./WithAuthentication";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  flex: 0 1 600px;
`;

interface AppProps {
  initialTweets: TweetModel[];
}

const App: FC<AppProps> = ({ initialTweets }) => {
  const user = useContext<User>(UserContext);

  const [tweets, setTweets] = useState<TweetModel[]>(initialTweets);
  const addTweetFn: AddTweetFn = (newTweetBody: string) =>
    setTweets([
      ...tweets,
      {
        author: user,
        body: newTweetBody,
        createdOn: new Date().toJSON(),
      },
    ]);

  return (
    <FlexBox>
      <SideNav />
      <Main data-testid="main-section">
        <Header />
        <NewTweetSection addTweet={addTweetFn} />
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </Main>
    </FlexBox>
  );
};

export default App;
