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
import Image from "next/image";
const NanumFont = Nanum_Pen_Script({ subsets: ["latin"], weight: ["400"] });

function Appbar() {
  // single media query with no options
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <HStack  w="full"  className="appbar">
      <Container
        maxW={"container.lg"}
        alignItems={"center"}
        justifyContent={"space-between"}
        display={"flex"}
        flexWrap={"wrap"}
      >
        
        <Box>
          <Link href="/">
          <Text
            className={NanumFont.className}
            _hover={{ cursor: "pointer" }}
            fontSize={"xx-large"}
          >
            <Image src="/logo.png" width="100" height="100" alt="image"/>
          </Text></Link>
        </Box>
        {isLargerThan800 ? (
          <Box>
            <UnorderedList fontSize={"md"} display={"flex"} gap={"6"} listStyleType={"none"}>
              <Link href={"/products"} >
                <ListItem _hover={{ cursor: "pointer" }}>Products</ListItem>
              </Link>
              {/* <Link href="/documents"><ListItem _hover={{ cursor: "pointer" }} >Documents</ListItem></Link> */}
              <Link href="/about-us"><ListItem _hover={{ cursor: "pointer" }}>About us</ListItem></Link>
            </UnorderedList>
          </Box>
        ) : null}


      </Container>
    </HStack>
  );
}



export default Appbar;