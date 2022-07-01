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
  Input,
  ListIcon,
  OrderedList,
  UnorderedList,
  } from "@chakra-ui/react";
  import {theme} from '../../styles/theme'
  import nookies from 'nookies'
import { useState } from "react";

export function Cookie(){
    const [cookie, setCookie] = useState(false)

    return(
        <>
        {!cookie && <Box position="absolute" w={500} h={220} p={3} display="flex" flexDir="column" justifyContent="space-between" borderRadius={8} bottom={5} left={5} bg="white">
            <Text fontWeight="bold" color="black">Aviso</Text>
            <Text fontSize="0.8rem" color="black" align="justify">Nós e os terceiros selecionados usamos cookies ou tecnologias similares para finalidades técnicas e, com seu consentimento, para outras finalidades. Negá-los poderá tornar os recursos relacionados indisponíveis.

<br></br>
Você poderá livremente conceder, negar ou cancelar sua permissão a qualquer momento.
<br></br>
Você poderá consentir o uso de tais tecnologias ao usar o botão “Aceitar”.</Text>
            <Button mt={5} bg={theme.colors.pink[500]} colorScheme={theme.colors.pink[400]} onClick={() => setCookie(true)}>Aceitar</Button>
        </Box>}
        </>
    )
}