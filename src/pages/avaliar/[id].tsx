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
  import toast from 'react-hot-toast';
//   import '../../styles/star.css'

import {api} from '../../services/integration';

export default function Avaliar() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  const [ loading, setLoading ] = useState(false)

  function Loading(){
    setLoading(true)
    new Promise(() => setTimeout(() => {setLoading(false), toast.success('Obrigado por sua avaliação!', {
      duration: 4000,
    });}, 2000))
  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
        <Head>
    <title>Avaliar | SW</title>
    </Head>
      <Flex justifyContent="center" alignItems="center" flexDir="column" bg="#1F2029" borderRadius="0.375rem" p="30px 20px">
        <Text fontSize="20px" fontWeight="bold" textAlign="center" display="block" color="#fff">Avaliação</Text>
<Box className="estrelas">
  {/* <input type="radio" id="cm_star-empty" name="fb" value="" checked/> */}
  <label htmlFor="cm_star-1"><i className="fa"></i></label>
  <input type="radio" id="cm_star-1" name="fb" value="1"/>
  <label htmlFor="cm_star-2"><i className="fa"></i></label>
  <input type="radio" id="cm_star-2" name="fb" value="2"/>
  <label htmlFor="cm_star-3"><i className="fa"></i></label>
  <input type="radio" id="cm_star-3" name="fb" value="3"/>
  <label htmlFor="cm_star-4"><i className="fa"></i></label>
  <input type="radio" id="cm_star-4" name="fb" value="4"/>
  <label htmlFor="cm_star-5"><i className="fa"></i></label>
  <input type="radio" id="cm_star-5" name="fb" value="5"/>
</Box>
<Button
            // as={'a'}
              // display={{ base: 'none', md: 'inline-flex' }}
              mt={2}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.500'}
              isLoading={loading}
              // href={'/login'}
              onClick={Loading}
              _hover={{
                bg: 'pink.400',
              }}>
              Enviar
            </Button>
      </Flex>
    </Flex>
  );
}