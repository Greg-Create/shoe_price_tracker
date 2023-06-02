import React from "react";
import { Input, Button, Flex, Text, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/authModalAtom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginform, setlogin] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginform.email, loginform.password);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlogin((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "rgb(217,79,112)",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "rgb(217,79,112)",
          boxShadow: "none",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
        fontSize="10pt"
        mb={2}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "rgb(217,79,112)",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "rgb(217,79,112)",
          boxShadow: "none",
        }}
        bg="gray.50"
      />
      <Text textAlign="center" color="red" fontSize="10pt">
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Flex justifyContent="center" mb={2} mt={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="rgb(217,79,112)"
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "resetPassword" }))
          }
        >
          Reset
        </Text>
      </Flex>
      <Button
        isLoading={loading}
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
        variant="solid"
      >
        Log In
      </Button>
     
      <Divider mb={2} />

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New Here?</Text>
        <Text
          color="rgb(217,79,112)"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "signup" }))
          }
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
