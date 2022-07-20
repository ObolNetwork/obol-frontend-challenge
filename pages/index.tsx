import axios from 'axios'
import Pokemons from './pokemons'
//import { useQuery, dehydrate, QueryClient } from 'react-query'


// const fetchPokemons = async () => {
//   const { data } = await axios.get(
//     "https://pokeapi.co/api/v2/pokemon?limit=150"
//   );

//   const pokemonArray = await Promise.all(
//     data.results.map(async (pokemon:any) => {
//       const res = await axios.get(pokemon.url);
//       return res.data;
//     })
//   );

//   return pokemonArray;
// };

export default function Home() {
  //const { data } = useQuery(["pokemons"], fetchPokemons);
  return (
    <>
      <div>
        {/* {data && data.map((pokemon:any) => (
          <div >{pokemon.name}</div>
       
        ))} */}
        <Pokemons/>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["pokemons"], fetchPokemons);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
