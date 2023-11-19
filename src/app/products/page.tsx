"use client";
import {
  Box,
  Container,
  HStack,
  Heading,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HeroProductCard from "../../../components/HeroProductCard";
import { Noto_Serif_Old_Uyghur } from "next/font/google";


const NotoFonts = Noto_Serif_Old_Uyghur({
  subsets: ["latin"],
  weight: ["400"],
});



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
    "name": "Leggings",
    "image": "/assets/images/leggings.jpg",
  },
  {
    "name": "Shorts",
    "image": "/assets/images/shorts.jpg"
  },
  {
    "name": "Tops",
    "image": "/assets/images/tops.jpg"
  },
  {
    "name": "Hoodies",
    "image": "/assets/images/hoodies.jpg"
  },
  {
    "name": "Jackets",
    "image": "/assets/images/jackets.jpg"
  },
  {
    "name": "Gymwear",
    "image": "/assets/images/gymwear.jpg"
  },
  {
    "name": "Yoga Pants",
    "image": "/assets/images/yogapants.jpg"
  },
  {
    "name": "Tank Tops",
    "image": "/assets/images/tanktops.jpg"
  },
  {
    "name": "Sports Bras",
    "image": "/assets/images/sportsbras.jpg"
  },
  {
    "name": "Teamwear",
    "image": "/assets/images/teamwear.jpg"
  },
  {
    "name": "Sweatshirt Leggings",
    "image": "/assets/images/sweatshirtleggings.jpg"
  }
  // Add more items as needed
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
    <Container mt="28" maxW={"container.xl"}>
    <Heading className={NotoFonts.className} textAlign={"center"}>Products</Heading>
      <ProductsList />
    </Container>
    </Box>
  );
}

const ProductsList = () => {
  return (
    <Box>
      <Heading  mt="9" className={NotoFonts.className}>Food and vegitables.</Heading>
     
      <Text mt="5" mb="9" maxW={"600"}>Benifexim, a leading international export company, sets the standard for excellence in delivering premium products across food, clothing, and pharmaceutical sectors. Our commitment to quality and global satisfaction is evident in each meticulously curated export, such as the vibrant array of fruits and vegetables in our 'FRUIT AND VEGETABLE' category.</Text>
      <Box display={"flex"} flexWrap={"wrap"} gap="5">
        {food.map((e: any) => {
          return <Card image={e.image} name={e.name} />;
        })}
      </Box>
      <Heading  mt="24" className={NotoFonts.className} fontWeight={"bold"}>Cloths.</Heading>
      <Text mt="5" mb="9" maxW={"600"}>Benifexim, an esteemed international export company, extends its commitment to excellence into the realm of clothing. Specializing in premium sportswear, including luxurious silk, comfortable cotton, and high-tech Multimode Fiber, our dedication to superior quality and global standards ensures that each garment under the 'SPORTSWEAR' category reflects the pinnacle of fashion and functionality.</Text>
      <Box display={"flex"} flexWrap={"wrap"} gap="5">
        {cloth.map((e: any) => {
          return <Card image={e.image} name={e.name} />;
        })}
      </Box>
      <Heading mt="24" className={NotoFonts.className}>Pharmaceuticals</Heading>
      <Text mt="5" mb="9" maxW={"600"}>Benifexim, a leading international export powerhouse, epitomizes excellence across sectors. From premium pharmaceuticals like Metformin and Aspirin to top-tier food, clothing, and more, our unwavering commitment to quality and global standards ensures an unparalleled export experience, enriching lives worldwide with precision and professionalism.</Text>
      <Box display={"flex"} flexWrap={"wrap"} gap="5">
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
