import React from "react";
import { Flex,Button } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../modal/Auth/AuthModal";
import { signOut,User } from "firebase/auth";
import {auth} from "../../../firebase/clientApp"
import Sideicons from "./Sideicons";

type RightContentProps = {
  user?:User |null;
};

const RightContent: React.FC<RightContentProps> = ({user}) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
    {user? <Sideicons user={user}/> : <AuthButtons />}    
      </Flex>
    </>
  );
};
export default RightContent;
