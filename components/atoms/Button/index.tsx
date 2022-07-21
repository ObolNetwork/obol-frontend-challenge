type Props = {
  onSearch: () => void;
  searchingInput: string;
};

export const Button: React.FC<Props> = ({ onSearch, searchingInput }) => {
  return (
    <button disabled={!searchingInput.length} onClick={() => onSearch()}>
      search
    </button>
  );
};
