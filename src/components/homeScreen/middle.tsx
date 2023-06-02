import React, { useEffect, useRef } from "react";
import {
  Text,
  Flex,
  SlideFade,
  Card,
  HStack,
  CardBody,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";
import BrandCards from "./brandCards";
import Cards from "./Cards";

const Middle: React.FC = () => {
  

  return (
    <Flex direction="column">
      <Flex
        bg="white"
        align="center"
        textAlign="center"
        justify="center"
        direction="column"
      >
          <Text
            mb={20}
            fontSize={{ base: "50", md: "60" }}
            fontWeight={500}
            mt={20}
          >
            Find the hottest Brands
          </Text>
        <BrandCards  />
        <Button variant="solid" opacity="0.9" mt={8} mb={20}>
          View More
        </Button>
      </Flex>
      <Text 
      textAlign="center"
        mb={20}
        fontSize={{ base: "50", md: "60" }}
        fontWeight={500}
        mt={20}
      >
        Discover the newest shoes
      </Text>
      <HStack align="center" justify="space-evenly" mb={3}>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </HStack>
    </Flex>
  );
};
export default Middle;
