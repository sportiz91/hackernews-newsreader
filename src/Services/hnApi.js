import axios from "axios";
import { selectedFields } from "../Selectors/Selector";

//Defining query variables:
export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const storyUrl = `${baseUrl}item`;
export const idsUrl = `${baseUrl}newstories.json`;

console.log(idsUrl);

//GET Requests:
export const getStoryIds = async () => {
  const result = await axios.get(idsUrl);

  const data = result.data;
  console.log(data);
  return data;
};

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl}/${storyId}.json`);
  const data = selectedFields(result.data);

  // console.log(data);

  return data;
};
