import React, { useEffect } from "react";
import { Flex, Image, keyframes } from "@chakra-ui/react";
import HomeText from "./homeText";
import { GiFroeAndMallet } from "react-icons/gi";



const animationKeyframes = keyframes`
  0% { transform: scale(1)  }
  50% { transform: scale(1.1)  }
  100% { transform: scale(1)  }
`;

const spin = keyframes`
  from {opacity:0; transform: translateX(-50px);}
  to {opacity:1; transform: translateX(0);}
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
const spinAnimation = `${spin} 1 1s linear`;


const Top: React.FC = () => {

  return (
    <Flex
      width="90vw"
      height="100vh"
      alignContent="center"
      justify="center"
      align="center"
      direction={{ base: "column", md: "column", lg: "row" }}
    >
      <HomeText />
      <Flex       width="50%"
 align="center" justify="center" direction="column">
        <Image animation={animation}  display={{base:"none", md:"none", lg:"flex"}} height="300px" width="300px" src="/images/shoeBoxes.png"     
         />
      </Flex>
    </Flex>
  );
};
export default Top;
