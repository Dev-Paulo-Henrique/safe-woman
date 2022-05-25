import { Box, Flex, Heading, Divider, VStack, HStack, Button, Img } from "@chakra-ui/react";
import { Header } from "./../components/Header";
import { Sidebar } from "./../components/Sidebar";
import { Input } from "./../components/Form/Input";
import { WithSubnavigation } from "./../components/Navigator/index";
import Link from 'next/link'
import Head from 'next/head'
import { push, child, ref, set } from "firebase/database";
import { theme } from "../styles/theme";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { auth, database } from "../services/firebase";

export default function CreateUser(){
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
      <Head>
    <title>Safe Woman</title>
    </Head>
      <WithSubnavigation/>
      {/* <Img src="https://trello.com/1/cards/62607c2c96955b623b1a0323/attachments/628c3ff62c461769e950d981/download/Banner_para_loja_de_eletr%C3%B4nicos_smartphone_desconto_preto_e_vermelho_(1)_(1).png"/> */}
    </Box>
  );
}