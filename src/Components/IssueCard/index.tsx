import { useNavigate } from 'react-router-dom';
import { dateRelativeToNow } from '../../utils/formatter';
import { CardContainer, CardHeader } from "./styles";

interface IssuesProps {
  title: string;
  body: string;
  number: number;
  updated_at: string;
}

export function IssueCard({ title, updated_at, body, number }: IssuesProps) {
  
  const relativeDate = dateRelativeToNow(updated_at);

  const fragment = body.substring(0, 176) + "...";

  const navigate = useNavigate()

  function handleRedirect() {
    navigate(`post/${number}`)
  }

  return (
    <CardContainer>
      <CardHeader>
        <h3 onClick={handleRedirect}>{title}</h3>
        <span>{relativeDate}</span>
      </CardHeader>

      <div>
        {fragment}
      </div>
    </CardContainer>
  )
}