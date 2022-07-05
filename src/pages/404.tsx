import {
    Box,
    Flex,
    Text,
    Heading,
    Center,
    Divider,
    VStack,
    HStack,
    Button,
    Img,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import Link from "next/link";
  import Head from "next/head";
  import { theme } from "../styles/theme";
  
  export default function NotFound() {
    const isWideVersion = useBreakpointValue({
      base: false,
      md: true
    })
      
    return (
      <Box>
        <Head>
          <title>Safe Woman</title>
        </Head>
         <Flex
          maxW="1120px"
          h="100vh"
          margin="auto"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
        <Text
        fontSize="2rem"
            fontWeight="bold"
            lineHeight="4.5rem"
            >Página não encontrada!</Text>
            <Text color="pink.500">Safe Woman</Text>
        </Flex>
      </Box>
    );
  }
  