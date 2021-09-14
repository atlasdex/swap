import { Flex } from "components/Box";
import Text from "components/Text";
import React from "react";

const Home: React.FC = () => {
  return (
    <Flex flexDirection="column" mr={["8px", 0]}>
      <Text text="Hello Body" />
    </Flex>
  );
};

export default Home;
