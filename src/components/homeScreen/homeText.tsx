import React, { useEffect, useState } from "react";
import { Flex, Text, keyframes, Stack, Button } from "@chakra-ui/react";
import WordFlick from "./animated";
import { AiOutlineSearch } from "react-icons/ai";


const spin = keyframes`
  from {opacity:0; transform: translateX(-50px);}
  to {opacity:1; transform: translateX(0);}
`;



const homeText: React.FC = () => {
  const spinAnimation = `${spin} 1 1s linear`;

  return (
    <Flex
      direction="column"
      height="100%"
      justify="center"
      width="100%"
      align="center"
      animation={spinAnimation}
    >
      <Text fontSize={{ base: "50", md: "60" }} fontWeight={900}>
        Discover Your
      </Text>
      <Text fontSize={{ base: "50", md: "60" }} fontWeight={900} color="rgb(217,79,112)">
        Favorite{" "}
      </Text>

      <Text fontSize={{ base: "50", md: "60" }} fontWeight={900}>
        Shoes at the best Price
      </Text>

      <Text mt={4}>
        Keep track and compare the prices your favorite shoes,{" "}
      </Text>
      <Text>recieve notifications, see the different prices </Text>
      <Button width="100px" mt={5} leftIcon={<AiOutlineSearch />} padding={2}>
        Browse
      </Button>
    </Flex>
  );
};
export default homeText;
