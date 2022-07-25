
  
  
  // type IPokemonEssentials= {
  //   name: string;
  //   url: string;
  // }
  
  
  // type GetPokemonsResponse = {
  //   count: number;
  //   next: string | null;
  //   previous: string | null;
  //   results: IPokemonEssentials[];
  // };


  export async function fetchURL(url:string) {
    const response = await fetch(url);
    const result = await response.json();
  
    return result;
  }

