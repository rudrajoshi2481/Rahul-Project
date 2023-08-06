import { Box, Button, HStack, Heading, Input, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box mt="9" pb="9">
      
      <Box display={"flex"} justifyContent={"space-between"}>
        <VStack >
          <UnorderedList listStyleType={"none"} >
            <ListItem>Products</ListItem>
            <ListItem>Meet Team </ListItem>
            <ListItem>About Company</ListItem>
            
          </UnorderedList>
        </VStack>
        <VStack>
          <UnorderedList listStyleType={"none"}>
            <ListItem>About Us</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>VErify liscences</ListItem>
          </UnorderedList>
        </VStack>
        
        <VStack alignItems={"flex-start"}>
          <Heading fontSize={"xl"}>News Letter</Heading>
          <Input type="email" placeholder="email address" borderColor={"black"}/>
          <Button colorScheme="green">Submit </Button>
        </VStack>
        <VStack>
        <Heading>BENIFEXIM LLP</Heading>
        </VStack>

      </Box>
    </Box>
      
  );
}

export default Footer;
