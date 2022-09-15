import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IssuesContext } from "../../contexts/IssuesContext";
import { SearchFormContainer, SearchHeader } from "./styles";

export function SearchForm() {

  const { fetchIssues } = useContext(IssuesContext)

  const { register, handleSubmit, watch } = useForm()

  const queryText = watch('query', '');

  function handleQuerySearch() {
    fetchIssues(queryText);
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