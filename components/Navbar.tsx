"use client";
import { Box, Button, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
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
      py="6"
      position={"sticky"}
      top={"0"}
      className="glass-effect"
    >
      <HStack w="full" justifyContent={"space-between"} maxW={"container.xl"}>
        <Box ml="3">
        
          <Link href="/">BENIFEXIM LLP</Link>
        </Box>
        {isLargerThan800 ? (
          <Box>
            <UnorderedList display={"flex"} alignItems={"center"}>
              <ListItem listStyleType={"none"} px="4" fontWeight={"bold"}>
                Products.
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
