import { render } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import App from "../App";
import { getStoryIds, getStory } from "../Services/hnApi";
import { mockGetId, mockGetStory } from "../Fixture";
import { UseInfiniteScroll } from "../Hooks/UseInfiniteScroll";
import { STORY_INCREMENT } from "../Constans/Constans";

console.log(mockGetId);

jest.mock("../Hooks/UseInfiniteScroll");

jest.mock("../Services/hnApi", () => {
  return {
    getStoryIds: jest.fn(),
    getStory: jest.fn(),
  };
});

console.log(getStoryIds);

test("On page load, return the StoryContainer with a mock story in it", async () => {
  UseInfiniteScroll.mockImplementation(() => {
    return { count: STORY_INCREMENT };
  });

  //Important! You have to mockImplementation both API Get Requests, because when you render the component <App /> all the commands are executed as if it where
  //the real App. But, you have the mocked results here.
  getStoryIds.mockImplementation(() => Promise.resolve(mockGetId));

  getStory.mockImplementation(() => Promise.resolve(mockGetStory));

  const { getByRole, getByTestId } = render(<App />);

  await waitFor(() => {
    expect(getByRole("heading", { name: /hacker news stories/i })).toBeTruthy();
    expect(
      getByRole("heading", {
        name: /learn how to trade crypto, motherfucker!/i,
      })
    ).toBeTruthy();
    expect(getByTestId("tagContainer")).toHaveTextContent("Lasantoneta");
  });
});
