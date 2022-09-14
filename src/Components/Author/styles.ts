import styled from "styled-components";

export const AuthorContainer = styled.div`
  z-index: 100000;
  display: flex;
  gap: 2rem;

  background: ${ props => props.theme["base-profile"] };
  border-radius: 10px;
  padding: 2rem 2.5rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const AuthorHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${props => props.theme["base-title"]};
    margin-bottom: 0.5rem;
  }

  img {
    height: 19px;
  }
`

export const AuthorBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const Bio = styled.div`
  color: ${props => props.theme["base-text"]};
  font-size: 1rem;
  line-height: 1.6;
`

export const AuthorFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
`

export const IndicatorWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  
  img {
    width: 18px;
    height: 18px;
  }
`