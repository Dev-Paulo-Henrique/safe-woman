import { Box, Flex, Heading, Divider, VStack, HStack, Button } from "@chakra-ui/react";
import { Header } from "./../components/Header";
import { Sidebar } from "./../components/Sidebar";
import { Input } from "./../components/Form/Input";
import { TextArea } from "./../components/Form/TextArea";
import Link from 'next/link'
import { theme } from "../styles/theme";
import toast, { Toaster } from 'react-hot-toast';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBl_xXu8vkF_z_Qs1pTYCAcOYUE2z_RO88",
  authDomain: "safewoman22.firebaseapp.com",
  projectId: "safewoman22",
  storageBucket: "safewoman22.appspot.com",
  messagingSenderId: "880829612224",
  appId: "1:880829612224:web:731b048d16e8c787da6d25",
  measurementId: "G-R9NTPGP9KC"
};

initializeApp(firebaseConfig);

export default function CreateUser(){
  const [ username, setUsername ] = useState('')
  const [ local, setLocal ] = useState('')
  const [ date, setDate ] = useState('')
  const [ description, setDescription ] = useState('')

  function handleSubmit(event){
    event.preventDefault
    try {
      const db = getDatabase();
  set(ref(db, 'forms/' ), {//Após forms, colocar id do usuário
    username: username,
    local: local,
    date: date,
    description: description,
  });
      toast.success('Ocorrência registrada', {
        duration: 4000,
        position: 'bottom-center',
      });
    } catch (error) {
      toast.error('Falha ao registrar', {
        duration: 4000,
        position: 'bottom-center',
      });
    }

  }

  return(
    <Box direction="column" h="100vh" overflowY="auto"
    css={{
      '&::-webkit-scrollbar': {
        width: '4px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.colors.gray[600],
        borderRadius: '24px',
      },
    }}>
      <Header/>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Sidebar/>
      <Box as="form" flex="1"  borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit}>
      <Heading size="lg" fontWeight="normal">Depoimento</Heading>
      <Divider my="6" borderColor="gray.700"/>
      <VStack spacing="8">
        <Input name="name" type="text" label="Nome" onChange={(event) => setUsername(event.target.value)} css={{'&::selection': {background: theme.colors.pink[500]}}}/>
        <Input name="local" type="search" label="Local" onChange={(event) => setLocal(event.target.value)} css={{'&::selection': {background: theme.colors.pink[500]}}}/>
        <Input name="date" type="date" label="Data" cursor="pointer" onChange={(event) => setDate(event.target.value)}/>
        <TextArea name="description" label="Descrição" onChange={(event) => setDescription(event.target.value)} overflowY="auto"
    css={{
      '&::-webkit-scrollbar': {
        width: '4px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.colors.pink[500],
        borderRadius: '24px',
      },
      '&::selection': {
        background: theme.colors.pink[400],
      },
    }}/>
      </VStack>
      <Flex mt="8" justify="flex-end">
        <HStack spacing="4">
        <Link href="/automation" passHref>
          <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
          </Link>
          <Button type="submit" colorScheme="pink">Enviar</Button>
        </HStack>
      </Flex>
      </Box>
      </Flex>
      <Toaster/>
    </Box>
  );
}