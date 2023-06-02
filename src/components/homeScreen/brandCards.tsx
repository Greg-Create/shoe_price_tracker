import React from 'react';
import {HStack, Card,CardBody,Heading,Image,SlideFade} from "@chakra-ui/react"
import {useRef} from "react"
import { useInViewport } from "react-in-viewport";




const BrandCards:React.FC = () => {
  

    return(

        <HStack  align="center" justify="space-evenly">
        <Card height="300px" width="30%"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderRadius="20px" transition="0.5s" _hover={{transform:"scale(1.05)"}}>
          <CardBody  >
          <Heading mb={20}>Addidas</Heading>
            <Image height="50%" width="100%" src="/images/addidas.png"/>
          </CardBody>
        </Card>
        <Card  height="300px" width="30%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"  borderRadius="20px" transition="0.5s" _hover={{transform:"scale(1.05)"}}>
          <CardBody >
            <Heading mb={3}>Nike</Heading>
            <Image  height="60%" width="100%" src="/images/nike.png"/>
          </CardBody>
        </Card>
        <Card align='center' height="300px" width="30%"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"  borderRadius="20px" transition="0.5s" _hover={{transform:"scale(1.05)"}}>
          <CardBody >
          <Heading mb={10} >Yeezy</Heading>
            <Image height="45%" width="100%" src="/images/yeezy.png"/>
          </CardBody>
        </Card>
      </HStack>

    )
}
export default BrandCards;