import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { BadgesWrap, HeaderLeftContainer, HeaderRightContainer, PostFooter, PostHeader, PostTopContainer } from './styles'

export function PostTop() {
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
        JavaScript data types and data structures
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
          <p>5 comentários</p>
        </BadgesWrap>
      </PostFooter>
    </PostTopContainer>
  )
}