import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { usePokemonList } from "@hooks/usePokemons";

// const fetchPokemons = async () => {
//   const { data } = await axios.get(
//     "https://pokeapi.co/api/v2/pokemon?limit=150"
//   );

//   const pokemonArray = await Promise.all(
//     data.results.map(async (pokemon: any) => {
//       const res = await axios.get(pokemon.url);
//       return res.data;
//     })
//   );

//   return pokemonArray;
// };

async function fetchPokemons({
  pageParam = `https://pokeapi.co/api/v2/pokemon?limit=20
  `,
}) {
  return usePokemonList(pageParam);
}

export default function Pokemons() {
  //const { data } = useQuery(["pokemons"], usePokemonList);

  const { data, error, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(["pokemons"], fetchPokemons, {
      getNextPageParam: (lastPage) => lastPage.next,
      getPreviousPageParam: (firstPage) => firstPage.previous,
    });

  //   const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
  //     useInfiniteQuery(["pokemon"], usePokemonList, {
  //       getNextPageParam: (lastPage) => lastPage.nextPage,
  //     });

  //   useEffect(() => {
  //     const onScroll = async (event) => {
  //       const { scrollHeight, scrollTop, clientHeight } =
  //         event.target.scrollingElement;

  //       console.log(scrollHeight - scrollTop, "1111");
  //       console.log(clientHeight * 1.5, "22222");
  //       console.log(hasNextPage, "hasNextPage");

  //       console.log(!isFetchingNextPage, "!isFetchingNextPage");

  //       if (
  //         // hasNextPage &&
  //         // !isFetchingNextPage &&
  //         scrollHeight - scrollTop <=
  //         clientHeight * 1.5
  //       ) {
  //         ("hanaanananana");
  //         await fetchNextPage();
  //       }
  //     };

  //     document.addEventListener("scroll", onScroll);
  //     return () => {
  //       document.removeEventListener("scroll", onScroll);
  //     };
  //   }, []);

  //console.log(data, "dataaa");

  return (
    <>
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        <h1>Pokedex</h1>
        <ol className="pokemons">
          {data?.pages.map((page, index) =>
            page.results.map((pokemon) => {
              const { url } = pokemon;

              return <li key={url}>{url}</li>;
            })
          )}
        </ol>
      </InfiniteScroll>
      {/* <div>
        {data &&
          data.pages.map((group, i) =>
            group.response.map((pokemon, index) => (
              <li key={index}>{pokemon.url}</li>
            ))
          )}
      </div> */}
    </>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["pokemons"], usePokemonList);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
