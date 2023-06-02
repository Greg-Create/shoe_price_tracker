import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import SearchInput from "./searchInput";
import RightContent from "./RightContent/RightContent";
import {useEffect} from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from  '../../firebase/clientApp';

const Navbar: React.FC = () => {

  const [user,loading,error] = useAuthState(auth)
  return (
    <Flex bg="white" height="60px" padding="6px 12px" justify="space-between">
      <Flex align="center">
        <Image src="/images/shoeLogo.png" height="50px" width="50px" />
        <Text as="b" fontSize="md" display={{ base: "none", md: "unset" }}>
          Shalue
        </Text>
      </Flex>
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
