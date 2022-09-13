import { NavLink } from "react-router-dom";
import { AuthorBody, AuthorContainer, AuthorFooter, AuthorHeader, Bio, IconContainer, IndicatorWrap } from "./styles";

export function Author() {
  return (
    <AuthorContainer>
      <img src="https://github.com/guirecordon.png" alt="" />
      <AuthorBody>
        <div>
          <AuthorHeader>
            <h3>Gui Recordon</h3>
            <NavLink to="https://github.com/guirecordon">
              <img src="src/assets/github.svg" alt="link to github page" />
            </NavLink>
          </AuthorHeader>
          <Bio>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </Bio>
        </div>
        <AuthorFooter>
          <IndicatorWrap>
            <IconContainer><img src="src/assets/github-icon.svg" alt="github icon" /></IconContainer>
            <p>guirecordon</p>
          </IndicatorWrap>          
          <IndicatorWrap>
            <IconContainer><img src="src/assets/company-icon.svg" alt="company icon" /></IconContainer>
            <p>WaffleStack</p>
          </IndicatorWrap>
          <IndicatorWrap>
            <IconContainer><img src="src/assets/followers-icon.svg" alt="" /></IconContainer>
            <p>32 seguidores</p>
          </IndicatorWrap>
        </AuthorFooter>
      </AuthorBody>
    </AuthorContainer>
  )
}