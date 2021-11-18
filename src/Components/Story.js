import { useEffect, useState, memo } from "react";
import { getStory } from "../Services/hnApi";
import { Mapper } from "../Mappers/Mapper";
import { StorySection, SpanContainer } from "../Styles/StoryIndividual.style";

export const Story = memo(({ storyId }) => {
  const [story, setStory] = useState({});

  //Uncomment this console log and remove memo, to see the re-render of components. Is unoptimal!!!!!!!!! (everytime count state changes, story gets
  //loaded all again).
  //console.log(`component rendered id: ${storyId}`);

  useEffect(() => {
    getStory(storyId).then((data) => {
      data && data.url && setStory(data);
    });
  }, []);

  return (
    <>
      {story && story.url ? (
        <StorySection bgLink={"#f8dc3d"} colorLink={"#202020"}>
          <h1>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </h1>

          <div data-testid="tagContainer">
            <SpanContainer>
              <span>By: </span>
              {story.by}
            </SpanContainer>

            <SpanContainer>
              <span> Posted: </span>
              {Mapper(story.time)}
            </SpanContainer>
          </div>
        </StorySection>
      ) : null}
    </>
  );
});
