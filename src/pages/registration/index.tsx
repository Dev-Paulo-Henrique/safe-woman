import React, { useState, useEffect } from 'react';
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
    List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  } from "@chakra-ui/react";
  import Head from 'next/head'

import {api} from '../../services/integration';

import DevForm from '../../components/DevForm'
import DevItem from '../../components/DevItem';

import { auth } from "../../services/firebase";

export default function Registration() {
  const [devs, setDevs] = useState([]);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  return (
    <Box id="app" display="flex" flexDir={isWideVersion ? "row" : "column"}  justifyContent="center" mt="3rem">
        <Head>
    <title>Cadastro | SW</title>
    </Head>
      <Box w="320px" h="460px" bg="#1F2029" m={isWideVersion ? "0 2rem 2rem 2rem" : "auto auto 3rem auto"} borderRadius="0.375rem" p="30px 20px">
        <Text fontSize="20px" fontWeight="bold" textAlign="center" display="block" color="#fff">Cadastrar</Text>
        <DevForm onSubmit={handleAddDev} />
      </Box>

      {auth.currentUser?.uid === 'ONhO5k9W2tcymSb39KTTBKkWZi32' && <Box flex={1}>
        <UnorderedList display="grid" gridTemplateColumns={isWideVersion ? "repeat(2, 1fr)" : "repeat(1, 1fr)" } gridGap="20px" listStyle="none" mr="1rem">
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </UnorderedList>
      </Box>}
    </Box>
  );
}