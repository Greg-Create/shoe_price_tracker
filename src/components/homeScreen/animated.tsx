import React, { useEffect, useState } from "react";
import { Text,Flex } from "@chakra-ui/react";

const WordFlick: React.FC = () => {
  const words = ["Shoes", "Nike", "Addidas", "Roots"];
  const skipDelay = 15;
  const speed = 100;

  const [part, setPart] = useState("");
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [i, setI] = useState(0);
  const len = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prevSkipCount) => prevSkipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1 >= len ? 0 : prevI + 1));
          setOffset(0);
        }
      }

      setPart(words[i].substr(0, offset));

      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [forwards, i, offset, skipCount]);

  return (
    <Flex width="100%" align="center" justify="center">
        <Text mr={5} fontSize={{base:"50", md:"70"}}
      fontWeight={900}>Dream </Text>
    <Text
      sx={{
        background: "-webkit-linear-gradient(#FC5C7D, #6A82FB)",
        "-webkit-background-clip": "text",
        " -webkit-text-fill-color": " transparent",
      }}
      fontSize={{base:"50", md:"70"}}
      fontWeight={900}
    >
      
      {part}
    </Text>
    </Flex>
  );
};

export default WordFlick;
