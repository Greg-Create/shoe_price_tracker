import React from "react";
import {
  Card,
  Image,
  Heading,
  Flex,
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatHelpText,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";

const Cards: React.FC = () => {
  return (
    <>
      <Card
      _hover={{
  transform: "scale(1.05)"
      }}
      transition="0.5s"
        width="250px"
        height="350px"
        justify="center"
        align="left"
        textAlign="left"
      >
        <CardHeader width="100%">
          <Flex align="center" justify="space-between">
            <Stat>
            
              <StatNumber>$345</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>

            <IconButton

              aria-label="like"
              icon={<AiOutlineHeart color="currentColor"/>}
              bg="white"
              color="black"

              _hover={{
                color:"white",
                bg:"rgb(217,79,112)"
              }}
              boxShadow="0 0px 2px rgb(0 0 0 / 0.2);"
              borderRadius="50%"
              height="40px"
              width="10px"
            />
          </Flex>
        </CardHeader>
        <CardBody mb={2}>
          <Flex direction="column" align="center">
            <Image
              src="/images/airjordan.png "
              height="200px"
              width="200px"
              sx={{ filter: "drop-shadow(10px 10px 10px rgba(0,0,0,0.6))" }}
            />
            <Heading fontSize="18px" fontWeight="700">
              Air Jordan 14 Retro
            </Heading>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
export default Cards;
