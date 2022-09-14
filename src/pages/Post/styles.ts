import styled from "styled-components";

export const PostBody = styled.div`
  padding: 2rem;

  h2 {
    color: ${ props => props.theme.blue };
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`