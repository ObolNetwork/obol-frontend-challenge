
  
  import axios from 'axios';

  
  
  type IPokemonEssentials= {
    name: string;
    url: string;
  }
  
  
  type GetPokemonsResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemonEssentials[];
  };
  
    let renderCount = 50;
    let hasReachedEnd = false;

  // export async function usePokemonList() {
  //   if (hasReachedEnd) return;

  //     const { data } = await axios.get<GetPokemonsResponse>(
  //       `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`
  //     );
  //     const pokemonsData = data.results;
  
  //       if (!data.next) {
  //         hasReachedEnd = true;
  //       }
  
  //       renderCount = pokemonsData.length + 50;
  //       console.log(data.next,"data.next");
        
  
  //     return {response: pokemonsData , nextPage: data.next};
  // }

  export async function usePokemonList(url:string) {
    const response = await fetch(url);
    const result = await response.json();
  
    return result;
  }