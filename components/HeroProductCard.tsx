"use client";

import {
  Flex,
  Circle,
  Box,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { Nanum_Pen_Script, Noto_Serif_Old_Uyghur } from "next/font/google";
const NotoFonts = Noto_Serif_Old_Uyghur({
  subsets: ["latin"],
  weight: ["400"],
});
function Rating({ rating, numReviews }:any) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductsCard({ imageurl, name, link }: any) {
  const data = {
    isNew: true,
    imageURL: imageurl,
    name: name,
    price: 4.5,
    link: link,
    rating: 4.2,
    numReviews: 34,
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        borderColor={"blue.600"}
        bg={useColorModeValue("white", "gray.800")}
        maxW="xs"
        borderWidth="1px"
        // rounded="lg"
        shadow="lg"
        position="relative"
      >
        
        <Box display={"flex"} maxH={"200"} justifyContent={"center"}>
          <Image
            src={data.imageURL}
            height={"1"}
            width={"2"}
            layout="responsive"
            quality={"20"}
            alt={`Picture of ${data.name}`}
            // roundedTop="lg"
          />
        </Box>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
           
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              className={NotoFonts.className}
              
            >
              <Text fontSize={""}>{data.name}</Text>
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                {/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} /> */}
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex
            minW={"300px"}
            justifyContent="space-between"
            alignContent="center"
          >
            {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
            {/* <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box> */}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductsCard;
