"use client";
import {
  AbsoluteCenter,
  Badge,
  Box,
  Button,
  Container,
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
import Link from "next/link";
import React, { useState } from "react";
import WhatsAppContactComponent from "../../components/WhatsAppContactComponent";
import EmailComponent from "../../components/EmailComponent";
import HeroProductCard from "../../components/HeroProductCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Poppins, Noto_Serif_Old_Uyghur } from "next/font/google";
import ScrollAnimation from "../../components/ScrollAnimation";
import Image from "next/image";
const NanumFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const NotoFonts = Noto_Serif_Old_Uyghur({
  subsets: ["latin"],
  weight: ["400"],
});
function page() {
  return (
    <Box mt="13px" style={{ width: "98vw" }}>
      <Box className="hero" mt="16">
        {/* <Box > */}
        {/* <Image src={"/container.jpg"}  layout="fill" alt="image"/> */}
        <Container height={"60vh"} maxW={"container.xl"}>
          <Box pt="28" mt="28" >
            <HeroPage />
          </Box>
        </Container>
        {/* </Box> */}
      </Box>
      <Box mt="9" mb="8">
        <Container maxW={"container.xl"}>
          <ScrollAnimation />
        </Container>
      </Box>
      <Box>
        <Container maxW={"container.xl"}>
          <Logos />
        </Container>
      </Box>
      <Divider />
      <Box w="full">
        <Container maxW={"container.xl"}>
          <Story />
        </Container>
      </Box>
      <Divider />
      <Box w="full">
        <Container maxW={"container.xl"}>
          <Products />
        </Container>
      </Box>
    </Box>
  );
}

const Logos = () => {
  return (
    <Box
      display={"flex"}
      w="full"
      justifyContent={"space-between"}
      mt="9"
      mb="3"
    >
      <Image
        src={"/GST.png"}
        layout="fixed"
        width={"150"}
        height={"150"}
        alt="GST LOGO"
      />
      <Image src={"/Apeda.png"} width={"250"} height={"250"} alt="GST LOGO" />
      <Image src="/logo.png" width="250" height="150" alt="image" />
      <Image src={"/fssai01.png"} width={"200"} height={"200"} alt="GST LOGO" />
    </Box>
  );
};

const Products = () => {
  return (
    <Box mt="16">
      <Heading
        fontSize={"xxx-large"}
        className={NotoFonts.className}
        fontWeight={"extra-bold"}
        textAlign={"center"}
        pb="3"
      >
        Products
      </Heading>
    </Box>
  );
};

const Story = () => {
  return (
    <Box mt="8" w="full">
      <Heading
        fontSize={"xxx-large"}
        className={NotoFonts.className}
        fontWeight={"extra-bold"}
        textAlign={"center"}
        pb="3"
      >
        Our Stories
      </Heading>
      <Box maxW={"600px"}>
        <Heading
          pt="6"
          fontSize={"3xl"}
          className={NanumFont.className}
          fontWeight={"bold"}
        >
          Global Excellence in Delivery:
        </Heading>
        <Text fontSize={"xl"} textAlign={"justify"} pt="3">
          At Benifexim, we pride ourselves on a commitment to delivering a
          diverse range of high-quality products worldwide. From meeting
          specific demands to ensuring timely deliveries, our global presence
          guarantees satisfaction at every corner of the globe.
        </Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        flexDir={"column"}
        alignItems={"flex-end"}
        w="full"
        mt="12"
        // bg="orange"
      >
        <Heading
          pt="6"
          fontSize={"3xl"}
          className={NanumFont.className}
          fontWeight={"bold"}
          textAlign={"left"}
        >
          Global Market Impact:
        </Heading>
        <Text maxW={"600px"} textAlign={"justify"} fontSize={"xl"} pt="3">
          Benifexim is not just a local player; our increasing global reach has
          positioned us as a major exporter to 11 different countries. Continual
          improvement in the quality of our products gives us unparalleled
          access to diverse markets, reinforcing our status as a trusted and
          impactful player in the international trade arena.
        </Text>
      </Box>
      <Box maxW={"600px"} mt="12">
        <Heading
          pt="6"
          fontSize={"3xl"}
          className={NanumFont.className}
          fontWeight={"bold"}
        >
          Customer-Centric Energy:
        </Heading>
        <Text fontSize={"xl"} textAlign={"justify"} pt="3">
          Our customer focus is not just a philosophy; it's a way of life at
          Benifexim. We thrive on understanding and living with the energy of
          our customers, constantly adapting to their needs and speed. As your
          strong and reliable partner, customer satisfaction remains our top
          priority.
        </Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        flexDir={"column"}
        alignItems={"flex-end"}
        w="full"
        mt="12"
        // bg="orange"
      >
        <Heading
          pt="6"
          className={NanumFont.className}
          fontSize={"3xl"}
          fontWeight={"bold"}
        >
          Cost Reflects Quality:
        </Heading>
        <Text maxW={"600px"} textAlign={"justify"} fontSize={"xl"} pt="3">
          In the realm of import and export, Benifexim stands firm on the
          principle that cost is proportional to quality. We maintain rigorous
          quality standards across our product range, ensuring that every
          shipment reflects our unwavering dedication to excellence.
        </Text>
      </Box>
    </Box>
  );
};

const HeroPage = () => {
  return (
    <Box
      
      // style={{ height: "60vh" }}
      // mt="28"
    >
      <Box 
      p="9"
      className="bgblurr"
      // bg="red"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}>
      <Heading
        
        textAlign={"center"}
        fontSize={"xxx-large"}
        className="linear_gradient_hero"
      >
        Benifexim
        {/* <Image src="/logo.png" width="350" height="350" alt="image"/> */}
      </Heading>
      <Heading textAlign={"center"} className={NanumFont.className}>
        Elevating Excellence in Exports
      </Heading>
      <Text
        mt="2"
        fontSize={"xl"}
        className={NanumFont.className}
        textAlign={"center"}
      >
        Benifexim, a leading name in international exports, specializes in
        delivering superior quality food,{" "}
        <Badge colorScheme="green">vegetables</Badge>,{" "}
        <Badge colorScheme="orange">clothing</Badge>, and
        <Badge colorScheme="blue">pharmaceuticals</Badge>. Our unwavering
        commitment to excellence and global standards defines us as a trusted
        partner for premium products worldwide.
      </Text>
      </Box>
    </Box>
  );
};

export default page;
