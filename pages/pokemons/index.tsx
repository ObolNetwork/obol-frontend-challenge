import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { fetchURL } from "@utils/helpers";
import { Searchbar } from "@components/molecules/Searchbar";
import { Div } from "@components/atoms/Div";
import { Pokemon } from "./pokemon";
//import { pokemonDataInterface } from "@lib/interfaces";

interface pokemonDataInterface {
  name: string;
  url: string;
}

async function fetchPokemons({
  pageParam = `https://pokeapi.co/api/v2/pokemon?limit=50
  `,
}) {
  return fetchURL(pageParam);
}

export const Pokemons: React.FC = (): JSX.Element => {
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
    <Div space="press">
      <Searchbar
        searchingInput={searchingInput}
        setSearching={setSearchingInput}
        onSearch={onSearch}
      />{" "}
      {clickFlag ? (
        <Div display="grid">
          <Pokemon url={`https://pokeapi.co/api/v2/pokemon/${searchFilterg}`} />
        </Div>
      ) : (
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
          <Div display="grid">
            {data?.pages.map((page) =>
              page.results.map((pokemonData: pokemonDataInterface) => {
                const { url, name } = pokemonData;

                return <Pokemon key={name} url={url} />;
              })
            )}
          </Div>
        </InfiniteScroll>
      )}
    </Div>
  );
};
