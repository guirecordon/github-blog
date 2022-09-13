import { SearchFormContainer, SearchHeader } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchHeader>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </SearchHeader>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  )
}