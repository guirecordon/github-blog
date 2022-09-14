import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthorBody, AuthorContainer, AuthorFooter, AuthorHeader, Bio, IconContainer, IndicatorWrap } from "./styles";


interface authorDataProps {
  name?: string;
  html_url?: string;
  bio?: string;
  login?: string;
  company?: string;
  followers?: number;
}

export function Author() {

  const [authorData, setAuthorData] = useState<authorDataProps>({});

  async function loadAuthorData() {
    const response = await fetch("https://api.github.com/users/guirecordon");
    const data = await response.json()

    setAuthorData(data)
  }

    useEffect(() => {
      loadAuthorData();
    }, [])


  return (
    <AuthorContainer>
      <img src="https://github.com/guirecordon.png" alt="" />
      <AuthorBody>
        <div>
          <AuthorHeader>
            <h3>{authorData.name}</h3>
            <Link to="https://github.com/guirecordon">
              <img src="src/assets/github.svg" alt="link to github page" />
            </Link>
          </AuthorHeader>
          <Bio>
            {authorData.bio}
          </Bio>
        </div>
        <AuthorFooter>
          <IndicatorWrap>
            <IconContainer><img src="src/assets/github-icon.svg" alt="github icon" /></IconContainer>
            <p>{authorData.login}</p>
          </IndicatorWrap>          
          <IndicatorWrap>
            <IconContainer><img src="src/assets/company-icon.svg" alt="company icon" /></IconContainer>
            <p>{authorData.company}</p>
          </IndicatorWrap>
          <IndicatorWrap>
            <IconContainer><img src="src/assets/followers-icon.svg" alt="" /></IconContainer>
            <p>{authorData.followers} seguidores</p>
          </IndicatorWrap>
        </AuthorFooter>
      </AuthorBody>
    </AuthorContainer>
  )
}