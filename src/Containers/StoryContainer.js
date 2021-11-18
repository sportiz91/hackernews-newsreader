import React, { useEffect, useState } from "react";
import { getStoryIds } from "../Services/hnApi";
import { Story } from "../Components/Story";
import { UseInfiniteScroll } from "../Hooks/UseInfiniteScroll";
import {
  GlobalStyle,
  StoryMain,
  AppTitle,
} from "../Styles/StoryContainer.style";

export const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = UseInfiniteScroll();

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoryMain>
        <AppTitle>Hacker News Stories</AppTitle>
        {storyIds.slice(0, count).map((storyId) => {
          return <Story key={storyId} storyId={storyId} />;
        })}
      </StoryMain>
    </>
  );
};
