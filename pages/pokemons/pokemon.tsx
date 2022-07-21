import { useQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { fetchURL } from "@utils/helpers";
import { Image } from "@components/atoms/Image";

type Props = {
  url: string;
};

export const Pokemon: React.FC<Props> = ({ url }) => {
  const { data } = useQuery(["pokemons", url], () => fetchURL(url));
  return (
    <div>
      <h2>{data && data.name}</h2>
      <h2>{data && data.id}</h2>

      <Image
        url={data && `https://img.pokemondb.net/artwork/large/${data.name}.jpg`}
      />
    </div>
  );
};
