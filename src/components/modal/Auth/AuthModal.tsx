import React, { useEffect } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/authModalAtom";
import AuthInputs from "./AuthInputs";
import Oathbuttons from "./Oathbuttons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import ResetPassword from "./ResetPassword";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    if (user) handleClose();
  }, [user]);
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign="center"
            justifyContent="center"
            alignContent="center"
          >
            <Flex direction="column" align="center" justify="center">
              <Image src="/images/shoeLogo.png" height="50px" width="50px" />
              {modalState.view == "login" && "Login"}{" "}
              {modalState.view == "signup" && "Sign Up"}{" "}
              {modalState.view == "resetPassword" && "Reset password"}
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%"
            >
              {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                  <Oathbuttons />
                  <Text padding="0" color="gray.500" fontWeight={500}>
                    OR
                  </Text>
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
