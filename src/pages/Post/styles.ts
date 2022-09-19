import styled from "styled-components";

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  h2 {
    color: ${props => props.theme.blue};
  }

  li {
    width: 100%;
  }

  a{
    color: ${ props => props.theme.blue };
  }
`