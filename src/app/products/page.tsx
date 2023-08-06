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

function pages() {
  return (
    <Box>
      <Text color="yellow.400" mt="6">Page in development ⚠</Text>
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
 return(
  <Box display={"flex"} flexWrap={"wrap"}>
      <Card image="/assets/images/pharmaceuticals.jpg" name="" link=""/>
      <Card image="/assets/images/cloths.jpg"/>
      <Card image="/assets/images/vegitables.jpg"/>
      <Card image="/assets/images/pharmaceuticals.jpg"/>
      <Card image="/assets/images/pharmaceuticals.jpg"/>
  </Box>
 )
}

const Card = ({image,name,link}:any) => {
 return(<Box>
  <HeroProductCard
          imageurl={image}
          name="Pharmaceuticlas"
          link=""
        />
 </Box>)
}


export default pages;
