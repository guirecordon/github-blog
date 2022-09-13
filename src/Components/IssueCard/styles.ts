import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${ props => props.theme["base-post"] };
  border-radius: 10px;
  padding: 2rem;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${ props => props.theme["base-title"] };
    margin-bottom: 1.25rem;
    flex: 1;
  }
`

export const Snippet = styled.div`
  font-size: 1rem;
  line-height: 1.6rem;
  color: ${ props => props.theme["base-text"] };
`