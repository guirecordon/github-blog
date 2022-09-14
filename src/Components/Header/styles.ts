import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${ props => props.theme["base-profile"] };
  background-image: url("src/assets/Cover.svg");
  background-repeat: no-repeat;
  background-position: 50% 0;
  padding: 9.25rem;
`