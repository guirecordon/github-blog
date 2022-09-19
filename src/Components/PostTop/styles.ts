import styled from "styled-components";

export const PostTopContainer = styled.div`
  padding: 2rem;
  background-color: ${ props => props.theme["base-profile"] };
  border-radius: 10px;
  margin-bottom: 0.5rem;

  h2 {
    margin-bottom: 0.5rem;
    color: ${ props => props.theme["base-title"] };
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 700;
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  color: ${ props => props.theme.blue };
`

export const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const HeaderRightContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const PostFooter = styled.footer`
  display: flex;  
  gap: 2rem;
`
