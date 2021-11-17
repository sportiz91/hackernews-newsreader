import { useEffect, useState } from "react";
import { getStory } from "../Services/hnApi";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

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
              {story.time}
            </span>
          </div>
        </section>
      ) : null}
    </>
  );
};
