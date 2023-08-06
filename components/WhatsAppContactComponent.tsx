"use client";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function WhatsAppContactComponent() {
  return (
    <Box >
      
      <InputGroup borderColor={"black"}>
        <InputLeftAddon children="+91" />
        <Input type="tel" placeholder="phone number" />
      </InputGroup>
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
          Connect What's app
        </Button>
      </Link>
    </Box>
  );
}

export default WhatsAppContactComponent;
