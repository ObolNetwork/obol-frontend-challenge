// Import the link props
import { Text } from "@components/atoms/Text";
// import { Div } from "@components/atoms/Div";
import { Image } from "@components/atoms/Image";
import { Div } from "@components/atoms/Div";

// add the React Header Element
const Header: React.FC = () => {
  return (
    // header value,
    <Div
      display="flex"
      css={{ alignItems: "center", justifyContent: "center" }}
    >
      <Image src="./header.png" css={{ height: "10%", width: "10%" }} />
      <Text font="midFont" color="lightGrey" space="fit">
        Pokemon List
      </Text>
    </Div>
  );
};

// export Header module
export default Header;
