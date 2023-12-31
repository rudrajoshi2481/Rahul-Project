import { Box, Button, HStack, Heading, Input, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Box mt="9" pb="9">
      
      <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
      <VStack mt="3">
      <Link href="/"><Image src="/assets/images/logo.png" alt="logo" width={"100"} height={"100"}/></Link>
        </VStack>

        <VStack minW={"250"} mt="3" alignItems={"flex-start"}>
          <Heading fontSize={"md"}>Meet Team</Heading>
          <UnorderedList listStyleType={"none"} p="0" m="0">
            <ListItem>Products</ListItem>
            <ListItem>Meet Team </ListItem>
            <ListItem>About Company</ListItem>
            
          </UnorderedList>
        </VStack>
        <VStack minW={"250"} mt="3" alignItems={"flex-start"}> 
          <Heading fontSize={"md"}>Pages</Heading>
          <UnorderedList listStyleType={"none"} m="0">
            <ListItem>About Us</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>VErify liscences</ListItem>
          </UnorderedList>
        </VStack>
        
        <VStack alignItems={"flex-start"} mt="3">
          <Heading fontSize={"xl"}>News Letter</Heading>
          <Input type="email" placeholder="email address" borderColor={"black"}/>
          <Button colorScheme="green">Submit </Button>
        </VStack>

      </Box>
    </Box>
      
  );
}

export default Footer;
