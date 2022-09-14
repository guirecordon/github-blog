import { useEffect, useState } from "react";
import { Author } from "../../Components/Author";
import { IssueCard } from "../../Components/IssueCard";
import { SearchForm } from "../../Components/SearchForm";
import { CardsGrid } from "./styles";

interface IssuesProps {
  title: string;
  body: string;
  number: number;
  updated_at: string;
}

export function Blog() {

  const [issues, setIssues] = useState<IssuesProps[]>([])
  
  async function loadIssues() {
    const response = await fetch("https://api.github.com/repos/guirecordon/github-blog/issues");
    const data = await response.json()

    setIssues(data);
  }
  
  useEffect(() => {
    loadIssues()
  }, [])

  return (
    <div>
      <Author />
      <SearchForm />
      <CardsGrid>
        {issues.map(issue => {
          return (
            <IssueCard key={issue.number} {...issue} />
          )
        })}
      </CardsGrid>
    </div>
  )
}