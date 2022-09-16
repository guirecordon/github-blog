import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios'
import { BadgesWrap, HeaderLeftContainer, HeaderRightContainer, PostFooter, PostHeader, PostTopContainer } from './styles'

interface issuePage {
  title: string;
  html_url: string;
  user: {
    login: string;
  }
  created_at: string;
  comments: number;
}

export function PostTop() {
  const [issuePage, setIssuePage] = useState<issuePage>({} as issuePage)

  const issueId = 1;

  async function loadIssue() {
    const response = await api.get(`repos/guirecordon/github-blog/issues/${issueId}`)
    setIssuePage(response.data)
  }

  useEffect(() => {
    loadIssue();
  }, [])

  console.log(issuePage);

  return (
    <PostTopContainer>
      <PostHeader>
        <HeaderLeftContainer>
          <CaretLeft size={16} color="#3294F8" weight="bold" />
          <span>voltar</span>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <span>ver no github</span>
          <ArrowSquareOut size={16} color="#3294F8" weight="fill" />
        </HeaderRightContainer>
      </PostHeader>
      <h2>
        {issuePage.title}
      </h2>
      <PostFooter>
        <BadgesWrap>
          <img src="src/assets/github-icon.svg" />
          <p>guirecordon</p>
        </BadgesWrap>
        <BadgesWrap>
          <img src="src/assets/calendar-icon.svg" />
          <p>Há 1 dia</p>
        </BadgesWrap>
        <BadgesWrap>
          <img src="src/assets/comments-icon.svg" />
          <p>{issuePage.comments} comentários</p>
        </BadgesWrap>
      </PostFooter>
    </PostTopContainer>
  )
}