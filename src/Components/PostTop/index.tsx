import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { useContext, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { IssuesContext } from '../../contexts/IssuesContext';
import { dateRelativeToNow } from '../../utils/formatter';
import { IconContainer, IndicatorWrap } from '../Author/styles';
import { HeaderLeftContainer, HeaderRightContainer, PostFooter, PostHeader, PostTopContainer } from './styles'
import githubIcon from '../../assets/github-icon.svg'
import calendarIcon from '../../assets/calendar-icon.svg'
import commentsIcon from '../../assets/comments-icon.svg'

export function PostTop() {
  const { loadIssue, issuePage } = useContext(IssuesContext)
  const issueId = Number(location.pathname.slice(-1));
  const relativeDate = dateRelativeToNow(issuePage.created_at);

  useEffect(() => {
    loadIssue(issueId);
  }, [issueId])

  return (
    <PostTopContainer>
      <PostHeader>
        <NavLink to="/">
          <HeaderLeftContainer> 
            <CaretLeft size={16} color="#3294F8" weight="bold" />
            <span>voltar</span>
          </HeaderLeftContainer>
        </NavLink>
        <HeaderRightContainer href={issuePage.html_url} target="_blank">
          <span>ver no github</span>
          <ArrowSquareOut size={16} color="#3294F8" weight="fill" />
        </HeaderRightContainer>
      </PostHeader>
      <h2>
        {issuePage.title}
      </h2>
      <PostFooter>
        <IndicatorWrap>
          <IconContainer><img src={githubIcon} /></IconContainer>
          {issuePage.user.login? <p>{issuePage.user.login}</p> : <p>guirecordonildo</p>}
        </IndicatorWrap>
        <IndicatorWrap>
          <IconContainer><img src={calendarIcon} /></IconContainer>
          <p>{relativeDate}</p>
        </IndicatorWrap>
        <IndicatorWrap>
          <IconContainer><img src={commentsIcon} /></IconContainer>
          <p>{issuePage.comments} comentários</p>
        </IndicatorWrap>
      </PostFooter>
    </PostTopContainer>
  )
}