import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { fetchURL } from "@utils/helpers";
import { Searchbar } from "@components/molecules/Searchbar";
import { Pokemon } from "./pokemon";
import { pokemonDataInterface } from "@lib/interfaces";

async function fetchPokemons({
  pageParam = `https://pokeapi.co/api/v2/pokemon?limit=20
  `,
}) {
  return fetchURL(pageParam);
}

export default function Pokemons() {
  const [searchingInput, setSearchingInput] = useState(""); //this state should be managed
  const [clickFlag, setClickFlag] = useState(false); //this state should be managed
  const [searchFilterg, setSearchFilterg] = useState(""); //this state should be managed

  useEffect(() => {
    if (clickFlag && !searchingInput.length) {
      setClickFlag(false);
    }
  }, [searchingInput]);

  const onSearch = async () => {
    setClickFlag(true);
    setSearchFilterg(searchingInput);
  };

  const { data, error, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(["pokemons"], fetchPokemons, {
      getNextPageParam: (lastPage) => lastPage.next,
      getPreviousPageParam: (firstPage) => firstPage.previous,
    });

  return (
    <>
      <Searchbar
        searchingInput={searchingInput}
        setSearching={setSearchingInput}
        onSearch={onSearch}
      />
      {clickFlag ? (
        <Pokemon url={`https://pokeapi.co/api/v2/pokemon/${searchFilterg}`} />
      ) : (
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
          <ol>
            {data?.pages.map((page, index) =>
              page.results.map((pokemonData: pokemonDataInterface) => {
                const { url, name } = pokemonData;

                return <Pokemon key={name} url={url} />;
              })
            )}
          </ol>
        </InfiniteScroll>
      )}
    </>
  );
}
