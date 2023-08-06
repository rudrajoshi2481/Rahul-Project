// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'

export  default function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />
        <Container maxW={"container.xl"}>
        {children}
        </Container>
      </ChakraProvider>
    </CacheProvider>
  )
}