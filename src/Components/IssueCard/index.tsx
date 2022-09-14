import { CardContainer, CardHeader } from "./styles";

interface IssuesProps {
  title: string;
  updated_at: string;
  body: string;
}

export function IssueCard({ title, updated_at, body }: IssuesProps) {
  return (
    <CardContainer>
      <CardHeader>
        <h3>{title}</h3>
        <span>{updated_at}</span>
      </CardHeader>

      <div>
        {body}
      </div>
    </CardContainer>
  )
}