import styled from "styled-components";

export const SearchFormContainer = styled.div`
  padding-top: 4.5rem;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    background: ${ props => props.theme["base-input"] };
    border-radius: 6px;
    border: 2px solid ${ props => props.theme["base-border"] };
    padding: 1rem;
    color: ${ props => props.theme["base-text"] };
  }

  margin-bottom: 3rem;
`

export const SearchHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.75rem 0;
`