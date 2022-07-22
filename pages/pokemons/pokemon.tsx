import { useQuery } from "react-query";
import { fetchURL } from "@utils/helpers";
import { Image } from "@components/atoms/Image";
import { Div } from "@components/atoms/Div";
import { Text } from "@components/atoms/Text";
import { Link } from "@components/atoms/Link";

type Props = {
  url: string;
};

interface ability {
  name: string;
  url: string;
}

interface abilityDesc {
  ability: ability;
  is_hidden: boolean;
  slot: number;
}

export const Pokemon: React.FC<Props> = ({ url }): JSX.Element => {
  const { data } = useQuery(["pokemons", url], () => fetchURL(url));

  console.log(data, "data");

  return (
    <Div color="grey" size="quarter">
      <Image
        size="halfHeight"
        src={data && `https://img.pokemondb.net/artwork/large/${data.name}.jpg`}
      />
      <Div display="colFlex" css={{ height: "40%", position: "relative" }}>
        <Text color="light" font="midFont" space="zeroM">
          {data && data.name}
        </Text>
        <Div>
          {data &&
            data.abilities.map((oneAbility: abilityDesc) => {
              return (
                <Text space="zeroM" color="body" font="smallFont">
                  {oneAbility.ability && oneAbility.ability.name}
                </Text>
              );
            })}
          <Text space="zeroM" color="body" font="smallFont">
            {data && data.species.name}
          </Text>
        </Div>
        <Link
          css={{ position: "absolute", bottom: "15px", textDecoration: "none" }}
          color="obolGreen"
          font="smallFont"
          target="blank"
          href={data && `https://bulbapedia.bulbagarden.net/wiki/${data.name}`}
        >
          Details
        </Link>
      </Div>
    </Div>
  );
};
