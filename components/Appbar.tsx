"use client";
import {
  Box,
  Container,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Nanum_Pen_Script } from "next/font/google";
import Link from "next/link";
const NanumFont = Nanum_Pen_Script({ subsets: ["latin"], weight: ["400"] });

function Appbar() {
  // single media query with no options
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <HStack zIndex={"50"} w="full" py="2" pos={"fixed"} top={"0"} className="appbar">
      <Container
        maxW={"container.lg"}
        alignItems={"center"}
        justifyContent={"space-between"}
        display={"flex"}
        flexWrap={"wrap"}
      >
        <Box>
          <Text
            className={NanumFont.className}
            _hover={{ cursor: "pointer" }}
            fontSize={"xx-large"}
          >
            Rudhra Joshi .
          </Text>
        </Box>
        {isLargerThan800 ? (
          <Box>
            <UnorderedList fontSize={"md"} display={"flex"} gap={"6"} listStyleType={"none"}>
              <Link href={"https://blogs.rudrajoshi.me"} target="_blank">
                <ListItem _hover={{ cursor: "pointer" }}>Products</ListItem>
              </Link>
              <ListItem _hover={{ cursor: "pointer" }}>Documents</ListItem>
              <Link href="/about-us"><ListItem _hover={{ cursor: "pointer" }}>About us</ListItem></Link>
            </UnorderedList>
          </Box>
        ) : null}


      </Container>
    </HStack>
  );
}

export default Appbar;