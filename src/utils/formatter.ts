import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function dateRelativeToNow(date: string) {
    
  const updatedAtRelativeToNow = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    updatedAtRelativeToNow
  )
}

