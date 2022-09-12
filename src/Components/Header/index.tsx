import { HeaderContainer } from "./styles";
import cover from '../../assets/cover-img.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={cover} />
    </HeaderContainer>
  )
}