import { useForm } from "react-hook-form";
import { SearchFormContainer, SearchHeader } from "./styles";

export function SearchForm() {

  const { register, watch } = useForm()

  console.log(watch('query', ''));

  return (
    <SearchFormContainer>
      <SearchHeader>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </SearchHeader>
      <form>
        <input 
          type="text" 
          placeholder="Buscar conteúdo" 
          {...register('query')}
          />
      </form>
    </SearchFormContainer>
  )
}