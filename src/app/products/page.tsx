"use client";
import {
  Box,
  HStack,
  Heading,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HeroProductCard from "../../../components/HeroProductCard";

const food = [
  {
    name: "Greenchilly",
    image: "/assets/images/greenchilli.jpg",
  },
  {
    name: "Lemon",
    image: "/assets/images/lemon.jpg",
  },
  {
    name: "Ginger",
    image: "/assets/images/ginger.jpg",
  },
  {
    name: "Promogrent",
    image: "/assets/images/greenchilli.jpg",
  },
  {
    name: "Drumstick",
    image: "/assets/images/greenchilli.jpg",
  },
  {
    name: "Onion",
    image: "/assets/images/onion.jpg",
  },
  {
    name: "Small Onion",
    image: "/assets/images/onion.jpg",
  },
];

const cloth = [
  {
    name: "Silk",
    image: "/assets/images/slik.jpg",
  },
  {
    name: "Cotton",
    image: "/assets/images/cotton.jpg",
  },
  {
    name: "Multimode Fiber",
    image: "/assets/images/cotton.jpg",
  },
];

const pharmaceuticals = [
  {
    name:"Metformine",
    image:""
  },
  {
    name:"Aspirin",
    image:""
  },
  {
    name:"Atenolol",
    image:""
  },
  {
    name:"Atorvastatin",
    image:""
  },
]

function pages() {
  return (
    <Box>
      <Text color="yellow.400" mt="6">
        Page in development ⚠
      </Text>
      <Heading mt="9">Catalog</Heading>
      <HStack borderColor={"green.400"} border={"1px"} p="3" my="3">
        {" "}
        <Tag borderRadius="full" variant="solid" colorScheme="green">
          <TagLabel>Fruits & Vegitables</TagLabel>
          <TagCloseButton />
        </Tag>
        <Tag borderRadius="full" variant="solid" colorScheme="green">
          <TagLabel>Cloths</TagLabel>
          <TagCloseButton />
        </Tag>
        <Tag borderRadius="full" variant="solid" colorScheme="green">
          <TagLabel>Pharmaceuticals</TagLabel>
          <TagCloseButton />
        </Tag>
      </HStack>
      <Box>
        <ProductsList />
      </Box>
    </Box>
  );
}

const ProductsList = () => {
  return (
    <Box>
      <Heading  my="6">Food and vegitables.</Heading>
      <Box display={"flex"} flexWrap={"wrap"}>
        {food.map((e: any) => {
          return <Card image={e.image} name={e.name} />;
        })}
      </Box>
      <Heading  my="6">Cloths.</Heading>
      <Box display={"flex"} flexWrap={"wrap"}>
        {cloth.map((e: any) => {
          return <Card image={e.image} name={e.name} />;
        })}
      </Box>
      <Heading my="6">Pharmaceuticals</Heading>
      <Box display={"flex"} flexWrap={"wrap"}>
        {pharmaceuticals.map((e: any) => {
          return <Card image={e.image} name={e.name} />;
        })}
      </Box>
      
    </Box>
  );
};

const Card = ({ image, name, link }: any) => {
  return (
    <Box>
      <HeroProductCard imageurl={image } name={name} link="" />
    </Box>
  );
};

export default pages;
