import React from 'react';
import {Flex,Button,Center,Text} from "@chakra-ui/react"
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/clientApp';


const Oathbuttons:React.FC= () => {

  const [signInWithGoogle,user,loading,error] = useSignInWithGoogle(auth)
    
    return(
<Flex direction='column' width="100%" mb={3}>
<Button isLoading={loading} w={'full'} variant={'oauth'} onClick={()=>signInWithGoogle()} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Continue with Google</Text>
          </Center>
        </Button>
        {error && <Text>{error.message}</Text>}
</Flex>
    )
}
export default Oathbuttons;