import React from "react";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/authModalAtom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import {FIREBASE_ERRORS} from "../../../firebase/errors"

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signupForm, setsignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Passwords Do Not Match");
      return;
    }

    createUserWithEmailAndPassword(signupForm.email, signupForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsignupForm((prev) => ({
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
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
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
          {error ||  FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      
      <Button
      isLoading={loading}
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
        variant="solid"
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Have an Account?</Text>
        <Text
          color="rgb(217,79,112)"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "login" }))
          }
        >
          Login
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
