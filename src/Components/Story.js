import { useEffect, useState, memo } from "react";
import { getStory } from "../Services/hnApi";
import { Mapper } from "../Mappers/Mapper";

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
        <section>
          <h1>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </h1>

          <div>
            <span>
              <span>By: </span>
              {story.by}
            </span>

            <span>
              <span> Posted: </span>
              {Mapper(story.time)}
            </span>
          </div>
        </section>
      ) : null}
    </>
  );
});
