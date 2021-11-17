import { useEffect, useState } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../Constans/Constans";

export const UseInfiniteScroll = () => {
  const [count, setCount] = useState(STORY_INCREMENT);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  const handleScroll = () => {
    // console.log("Event Fired");
    // console.log(window.innerHeight);
    // console.log(document.documentElement.offsetHeight);
    // console.log(document.documentElement.scrollTop);

    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  };

  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll");
    };
  });

  return { count };
};
