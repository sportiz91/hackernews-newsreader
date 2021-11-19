import { render } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import { Story } from "../Components/Story";
import { getStory } from "../Services/hnApi";
import { mockGetStory } from "../Fixture";

jest.mock("../Services/hnApi", () => {
  return {
    getStory: jest.fn(),
  };
});

test("Render Story component with a mock story in it", async () => {
  getStory.mockImplementation(() => Promise.resolve(mockGetStory));

  const { getByRole, getByTestId } = render(<Story id={1} storyId={1} />);

  await waitFor(() => {
    expect(
      getByRole("heading", {
        name: /learn how to trade crypto, motherfucker!/i,
      })
    ).toBeTruthy();
    expect(getByTestId("tagContainer")).toHaveTextContent("Lasantoneta");
  });
});
