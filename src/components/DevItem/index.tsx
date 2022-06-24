import React from 'react';
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
import Link from "next/link";


export default function DevItem({ dev }) {
  return (
    <List
    background= '#FFF'
  boxShadow= '0 0 14px 0 rgba(0, 0, 0, 0.02)'
  borderRadius= '0.375rem'
  padding= '20px'
   className="dev-item">
      <Flex alignItems="center">
        <Img w="54px" h="54px" borderRadius="50%" src={dev.avatar_url} alt={dev.github_username} />
        <Box ml="10px" className="user-info">
          <Text display="block" fontSize="16px" color="#333" fontWeight="bold">{dev.techs.join(', ')}</Text>  
          <Text fontSize="13px" color="#999" mt="2px">{dev.name}</Text>
        </Box>              
      </Flex>
      <Text color="#666"
  fontSize="14px"
  lineHeight="20px"
  m="10px 0">{dev.bio}</Text>
      <Text color="#D53F8C"
  fontSize="14px"
  textDecoration="none"><Link href={`https://api.whatsapp.com/send/?phone=${dev.github_username}`}>Abrir WhatsApp</Link></Text>
    </List>
  );
}
