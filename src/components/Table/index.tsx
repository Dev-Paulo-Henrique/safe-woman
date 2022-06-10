import { Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";
import { theme } from "../../styles/theme";
import { useRouter } from 'next/router';

export function Price(){
  const router = useRouter()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return(
    <Box id="price" direction="column">
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Box flex="1"  borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Tabela de preços
          </Heading>
      </Flex>
        <>
        <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Plano</Th>
            { isWideVersion && <Th>Diário</Th> }
            { isWideVersion && <Th>Semanal</Th> }
            { isWideVersion && <Th>Mensal</Th> }
            { !isWideVersion && <Th>A partir de</Th> }
          </Tr>
        </Thead>
        <Tbody>
              <Tr>
            <Td>
              <Box>
                <Text color="pink.400" fontWeight="bold">Lite</Text>
                <Text fontSize="sm" color="gray.300">Disponível para 1 pessoa</Text>
              </Box>
            </Td>
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_14k9C63t1f0n4UMaF4')}>
              R$12,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_cN28y20gP9G372U28z')}>
              R$84,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_fZecOibZx3hFaf65kM')}>
              R$360,00
            </Button>
            </Td> }
            { !isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_14k9C63t1f0n4UMaF4')}>
              R$12,00
            </Button>
            </Td> }
          </Tr>
          <Tr>
            <Td>
              <Box>
                <Text color="pink.400" fontWeight="bold">Duo</Text>
                <Text fontSize="sm" color="gray.300">Disponível para 2 pessoas</Text>
              </Box>
            </Td>
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_bIY01we7F3hFbjaeVn')}>
              R$18,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_8wMaGabZxdWj4UMeVo')}>
              R$126,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_eVa9C66Fd19xbja3cH')}>
              R$540,00
            </Button>
            </Td> }
            { !isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_bIY01we7F3hFbjaeVn')}>
              R$18,00
            </Button>
            </Td> }
          </Tr>
              <Tr>
            <Td>
              <Box>
                <Text color="pink.400" fontWeight="bold">Basic</Text>
                <Text fontSize="sm" color="gray.300">Disponível para 3 pessoas</Text>
              </Box>
            </Td>
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_eVa6pU6Fdg4r5YQeVq')}>
              R$24,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_cN2aGad3B6tRcneaFb')}>
              R$168,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_4gw29E5B97xV9b2eVs')}>
              R$720,00
            </Button>
            </Td> }
            { !isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_eVa6pU6Fdg4r5YQeVq')}>
              R$24,00
            </Button>
            </Td> }
          </Tr>
              <Tr>
            <Td>
              <Box>
                <Text color="pink.400" fontWeight="bold">Classic</Text>
                <Text fontSize="sm" color="gray.300">Disponível para 5 pessoas</Text>
              </Box>
            </Td>
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_aEU4hM4x5dWj5YQ00z')}>
              R$48,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_9AQ9C61kT4lJcnecNm')}>
              R$336,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_6oE9C68NlaK75YQ6oZ')}>
              R$1.440,00
            </Button>
            </Td> }
            { !isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_aEU4hM4x5dWj5YQ00z')}>
              R$48,00
            </Button>
            </Td> }
          </Tr>
              <Tr>
            <Td>
              <Box>
                <Text color="pink.400" fontWeight="bold">Premium</Text>
                <Text fontSize="sm" color="gray.300">Disponível para 10 pessoas</Text>
              </Box>
            </Td>
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_9AQ8y2d3B19x72U28K')}>
              R$72,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_5kA29E4x5cSf9b26p1')}>
              R$504,00
            </Button>
            </Td> }
            { isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_8wMbKe1kT19xbja00E')}>
              R$2.160,00
            </Button>
            </Td> }
            { !isWideVersion && <Td>
                <Button size="sm" leftIcon={<Icon as={RiShoppingCartLine}/>} fontSize="sm" colorScheme="pink" onClick={() => router.push('https://buy.stripe.com/test_9AQ8y2d3B19x72U28K')}>
              R$72,00
            </Button>
            </Td> }
          </Tr>
        </Tbody>
      </Table>
        </>
      </Box>
      </Flex>
    </Box>
  );
}