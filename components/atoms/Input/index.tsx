type Props = {
  setSearching: (param: string) => void;
};
export const Input: React.FC<Props> = ({ setSearching }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearching(e.target.value);
  };

  return <input onChange={onChange} />;
};
