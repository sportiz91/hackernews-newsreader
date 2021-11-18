import axios from "axios";
import { getStoryIds, getStory } from "../Services/hnApi";
import { mockGetId, mockGetStory, mockGetUndefinedStory } from "../Fixture";
import { idsUrl, storyUrl } from "../Services/hnApi";

beforeEach(() => {
  jest.resetAllMocks();
});

jest.mock("axios");

describe("Testing API integration", () => {
  it("Test getStoryIds", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: mockGetId }));

    const result = await getStoryIds();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(idsUrl);
    expect(result).toEqual(mockGetId);
  });

  it("Test getStory", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: mockGetStory }));

    const result = await getStory(1);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${storyUrl}/1.json`);
    expect(result).toStrictEqual(mockGetStory);
  });

  it("Test empty getStory", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: mockGetUndefinedStory })
    );

    const result = await getStory(1);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${storyUrl}/1.json`);
    expect(result).toStrictEqual(mockGetUndefinedStory);
  });
});
