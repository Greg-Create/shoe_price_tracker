import React from "react";
import {
  Flex,
  InputGroup,
  Stack,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

type searchInputProps = {

};

const SearchInput: React.FC<searchInputProps> = () => {
  return (
    <Flex flexGrow={0.9} mr={2} ml={2} align="center">
      <InputGroup>
        <InputRightElement  cursor='pointer'>
          <AiOutlineSearch color="gray.300"   />
        </InputRightElement>
        <Input
        borderRadius="20px"
          type="text"
          placeholder="Search For Shoes"
          fontSize="12pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg:"white",
            border:"1px solid"
          }}

          _focus={{
            outline:'none',
            border:"1px solid",
            boxShadow:"none"

          }}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
