import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CardContainer, CardHeader } from "./styles";

interface IssuesProps {
  title: string;
  body: string;
  number: number;
  updated_at: string;
}

export function IssueCard({ title, updated_at, body }: IssuesProps) {
  
  const publishedAt = new Date(updated_at)
  
  const updatedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const fragment = body.substring(0, 176) + "...";

  return (
    <CardContainer>
      <CardHeader>
        <h3>{title}</h3>
        <span>{updatedAtRelativeToNow}</span>
      </CardHeader>

      <div>
        {fragment}
      </div>
    </CardContainer>
  )
}