import { useContext, useEffect, useState } from "react";
import { Author } from "../../Components/Author";
import { IssueCard } from "../../Components/IssueCard";
import { SearchForm } from "../../Components/SearchForm";
import { IssuesContext } from "../../contexts/IssuesContext";
import { CardsGrid } from "./styles";

export function Blog() {
  const { issues } = useContext(IssuesContext);

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