"use client";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import WhatsAppContactComponent from "../../components/WhatsAppContactComponent";
import EmailComponent from "../../components/EmailComponent";
import Textimonial from "../../components/Testimonials";
import Footer from "../../components/Footer";
import ProductCard from "../../components/HeroProductCard";
import HeroProductCard from "../../components/HeroProductCard";
import {AiOutlineArrowRight} from "react-icons/ai"

function page() {
  return (
    <Box>
      <Box alignItems={"center"} my="6" minH={"60vh"}>
        
        <Heading fontSize={"6xl"} fontWeight={"bold"}>BENIFEXIM LLP</Heading>
        <Text pt="1">
        {" "}
        Nostrud ullamco nisi adipisicing non nostrud enim amet commodo.{" "}
      </Text>
        
      <Box >
      {/* <video autoPlay loop style={{ width: '80vw',zIndex:"-1"}}>
        <source src="./assets/videos/shipport.mp4" />
      </video> */}
      </Box>
      </Box>
      <Divider borderColor={"gray.400"}/>
      <Box mt="16" mb="16">
        <Product />
      </Box>
      <Divider borderColor={"gray.400"}/>
      <Box mt="16" mb="16">
        <Contact />
      </Box>
      <Box mt="2">
        <CompanyAdv />
      </Box>
      <Divider colorScheme="black"/>
      <Box >
        <Footer />
      </Box>
    </Box>
  );
}

const CompanyAdv = () => {
  return(
    <Box>
      {/* <Heading>BENIFEXIM LLP</Heading> */}
    </Box>
  )
}

const Contact = () => {
  const [show, setshow] = useState(1);

  return (
    <Box 
    my="9"
      display={"flex"}
      flexWrap="wrap"
    mb="9"
    style={{margin:"3em 0"}}
      justifyContent={"space-between"}
    >
      <Box maxW={"600"} style={{margin:".5em 0"}}>
        <Heading pb={"3"}>Contact us.</Heading>
        <Text>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </Text>
      </Box>
      <VStack mt="3">
        <HStack w="full" p="1" border={"1px solid"}>
          <Box
            p="3"
            flex="1"
            textAlign={"center"}
            border={show == 1 ? "1px solid white" : ""}
            bg={show == 1 ? "green.400" : ""}
            borderRadius={"5"}
            onClick={(e) => {
              setshow(1);
            }}
            cursor={"pointer"}
          >
            What's app
          </Box>
          <Box
            border={show == 0 ? "1px solid white" : ""}
            bg={show == 0 ? "green.400" : ""}
            p="3"
            flex="1"
            borderRadius={"5"}
            textAlign={"center"}
            onClick={(e) => {
              setshow(0);
            }}
            cursor={"pointer"}
          >
            Email address
          </Box>
        </HStack>
        <Box>{show ? <WhatsAppContactComponent /> : <EmailComponent />}</Box>
      </VStack>
    </Box>
  );
};

const Product = () => {
  return (
    <Box  my="6" style={{margin:"3em 0"}}>
      <Heading pb="3">Products.</Heading>
      <Text pb="3" color={"gray.400"}>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
      </Text>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
        
      <HeroProductCard imageurl="/assets/images/cloths.jpg" name="Cloths" link=""/>
      <HeroProductCard imageurl="/assets/images/vegitables.jpg" name="Fruits & Vegitables" link=""/>
      <HeroProductCard imageurl="/assets/images/pharmaceuticals.jpg" name="Pharmaceuticlas" link=""/>
      
      </Box>
      <Box w="full" display={"flex"} justifyContent={"center"}>
      <Button colorScheme="blue">Browse Products <span style={{marginLeft:"10px"}}><AiOutlineArrowRight /></span></Button>
      </Box>
    </Box>
  );
};

export default page;
