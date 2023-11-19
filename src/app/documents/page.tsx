import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { Noto_Serif_Old_Uyghur } from "next/font/google";


const NotoFonts = Noto_Serif_Old_Uyghur({
  subsets: ["latin"],
  weight: ["400"],
});
function page() {
  return (
    <Container maxW={"container.xl"}>
        <Heading className={NotoFonts.className} mt="24">Documents of Benifexim</Heading>
    </Container>
  )
}

export default page