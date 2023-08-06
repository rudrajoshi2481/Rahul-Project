import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function EmailComponent() {
  return (
    <Box>
      <InputGroup borderColor={"black"} >
        <InputLeftAddon children="+91" />
        <Input type="tel" placeholder="phone number" />
      </InputGroup>
      <VStack>
        <Box mt="3">
        <FormLabel fontSize={"sm"}>Site (optional)</FormLabel>
      <InputGroup borderColor={"black"} >
        <InputLeftAddon children="https://" />
        <Input placeholder="yoursite" />
        <InputRightAddon children=".com" />
      </InputGroup>
        </Box>
      </VStack>
      <Textarea
        mt="3"
        placeholder="write your message here"
        borderColor={"black"}
      ></Textarea>
      <Link
        href={"https://api.whatsapp.com/send/?phone=814747474&text=rudra"}
        target="_blank"
      >
        <Button mt="3" colorScheme="whatsapp">
          Send Email
        </Button>
      </Link>
    </Box>
  );
}

export default EmailComponent;
