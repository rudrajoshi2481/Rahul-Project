"use client";
import { Box, Button, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  // ssr-friendly media query with fallback
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Box
      // background={"red !important"}
      display={"flex"}
      justifyContent={"center"}
      borderBottomStyle={"solid"}
      borderBottomWidth={"1px"}
      py="2"
      position={"sticky"}
      top={"0"}
      className="glass-effect"
    >
      <HStack w="full" justifyContent={"space-between"} maxW={"container.xl"}>
        <Box ml="3">
        
          <Link href="/"><Image src="/assets/images/logo.png" alt="logo" width={"100"} height={"100"}/></Link>
        </Box>
        {isLargerThan800 ? (
          <Box>
            <UnorderedList display={"flex"} alignItems={"center"}>
              <ListItem listStyleType={"none"} px="4" fontWeight={"bold"}>
                <Link href="/products">Products.</Link>
              </ListItem>
              <ListItem listStyleType={"none"} px="4">
                <Link href={"/about-us"} >About Us</Link>
              </ListItem>
              <ListItem listStyleType={"none"} px="4">
                Contact Us
                {/* <Button colorScheme="whatsapp">What's App</Button> */}
              </ListItem>
            </UnorderedList>
          </Box>
        ) : null}
      </HStack>
    </Box>
  );
}

export default Navbar;
