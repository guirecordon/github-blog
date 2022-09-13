import { Author } from "../../Components/Author";
import { IssueCard } from "../../Components/IssueCard";
import { SearchForm } from "../../Components/SearchForm";
import { CardsGrid } from "./styles";

export function Blog() {
  return (
    <div>
      <Author />
      <SearchForm />
      <CardsGrid>
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </CardsGrid>
    </div>
  )
}