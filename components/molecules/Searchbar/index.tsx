import { Input } from "@components/atoms/Input";
import { Button } from "@components/atoms/Button";
import { Text } from "@components/atoms/Text";
import { Div } from "@components/atoms/Div";

type Props = {
  setSearching: (search: string) => void;
  onSearch: () => void;
  searchingInput: string;
};
export const Searchbar: React.FC<Props> = ({
  setSearching,
  onSearch,
  searchingInput,
}): JSX.Element => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearching(e.target.value);
  };
  return (
    <Div display="flex">
      <Text font="midFont" color="blue" space="fit">
        Search
      </Text>
      <Div>
        <Input
          placeholder="Id | name"
          font="smallFont"
          space="fit"
          color="grey"
          onChange={onChange}
        />
        <Button
          onClick={onSearch}
          disabled={!searchingInput.length}
          color={"green"}
          space={"fit"}
          font={"smallFont"}
        >
          Filter
        </Button>
      </Div>
    </Div>
  );
};
