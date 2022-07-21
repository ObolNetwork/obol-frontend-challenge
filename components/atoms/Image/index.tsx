type Props = {
  url: string;
};

export const Image: React.FC<Props> = ({ url }) => {
  return <img src={url} />;
};
