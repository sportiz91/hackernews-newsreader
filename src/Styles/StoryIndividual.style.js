import styled from "styled-components";

export const StorySection = styled.section`
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  & h1 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;

    & > a {
      text-decoration: none;
      background-color: ${(props) => props.bgLink};
      color: ${(props) => props.colorLink};
    }
  }
`;

export const SpanContainer = styled.span`
  font-style: italic;
  margin-right: 1rem;

  & > span {
    font-weight: 700;
  }

  &:last-of-type::before {
    content: "•";
  }
`;
