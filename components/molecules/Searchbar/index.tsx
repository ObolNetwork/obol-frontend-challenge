import { Input } from "@components/atoms/Input";
import { Button } from "@components/atoms/Button";

type Props = {
  setSearching: (search: string) => void;
  onSearch: () => void;
  searchingInput: String;
};
export const Searchbar: React.FC<Props> = ({
  setSearching,
  onSearch,
  searchingInput,
}) => {
  return (
    <div>
      <div>
        <Input setSearching={setSearching} />
      </div>

      <div>
        <Button onSearch={onSearch} searchingInput={searchingInput} />
      </div>
    </div>
  );
};
