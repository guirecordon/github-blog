import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { IssuesContext } from "../../contexts/IssuesContext";
import { SearchFormContainer, SearchHeader } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {

  const { fetchIssues } = useContext(IssuesContext)

  const { register, handleSubmit, watch } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const queryText = watch('query', '');

  async function handleQuerySearch() {
    await fetchIssues(queryText);
  }

  return (
    <SearchFormContainer>
      <SearchHeader>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </SearchHeader>
      <form onSubmit={handleSubmit(handleQuerySearch)}>
        <input 
          type="text" 
          placeholder="Buscar conteúdo" 
          {...register('query')}
          />
      </form>
    </SearchFormContainer>
  )
}