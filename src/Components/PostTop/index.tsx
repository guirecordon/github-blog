import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react';
import { IssuesContext } from '../../contexts/IssuesContext';
import { api } from '../../lib/axios'
import { BadgesWrap, HeaderLeftContainer, HeaderRightContainer, PostFooter, PostHeader, PostTopContainer } from './styles'

export function PostTop() {
  const { loadIssue, issuePage } = useContext(IssuesContext)

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
          {/* <p>{issuePage.user.login}</p> */}
        </BadgesWrap>
        <BadgesWrap>
          <img src="src/assets/calendar-icon.svg" />
          <p>{issuePage.created_at}</p>
        </BadgesWrap>
        <BadgesWrap>
          <img src="src/assets/comments-icon.svg" />
          <p>{issuePage.comments} comentários</p>
        </BadgesWrap>
      </PostFooter>
    </PostTopContainer>
  )
}