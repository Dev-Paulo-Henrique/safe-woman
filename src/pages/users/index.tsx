import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import NextLink from 'next/link'
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useState,  } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";
import { theme } from "../../styles/theme";

export default function UserList({ users }){
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page, {
    initialData: users,
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: string){
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)
      return response.data
    }, {
      staleTime: 1000 * 60 * 10
    })
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
      <Box flex="1"  borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Usuários
          { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/> }
          </Heading>
        <NextLink href="users/create" passHref>
        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
          Criar novo
        </Button>
        </NextLink>
      </Flex>
      { isLoading ? (
        <Flex justify="center" >
          <Spinner/>
        </Flex>
      ) : error ? (
        <Flex justify="center" >
          <Text>Falha ao obter dados dos usuários.</Text>
        </Flex>
      ): (
        <>
        <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th px={["4","4","6"]} color="gray.300" width="8">
              <Checkbox colorScheme="pink"/>
            </Th>
            <Th>Usuário</Th>
            { isWideVersion && <Th>Data de cadastro</Th> }
            <Th width="8"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.users.map(user => {
            return (
              <>
              <Tr key={user.id}>
            <Td  px={["4","4","6"]}>
            <Checkbox colorScheme="pink"/>
            </Td>
            <Td>
              <Box>
                <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                <Text fontWeight="bold">{user.name}</Text>
                </Link>
                <Text fontSize="sm" color="gray.300">{user.email}</Text>
              </Box>
            </Td>
            { isWideVersion && <Td>{user.createdAt}</Td> }
            { isWideVersion && <Td>
            <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>
          { isWideVersion ? 'Editar' : '' }
        </Button>
            </Td> }
          </Tr>
          </>
            )
          })}
        </Tbody>
      </Table>
      <Pagination
      totalCountOfRegisters={data.totalCount}
      currentPage={page}
      onPageChange={setPage}
      />
        </>
      )}
      {/* FAKE */}
      {/* <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th px={["4","4","6"]} color="gray.300" width="8">
              <Checkbox colorScheme="pink"/>
            </Th>
            <Th>Usuário</Th>
            { isWideVersion && <Th>Data de cadastro</Th> }
            <Th width="8"></Th>
          </Tr>
        </Thead>
        <Tbody>
              <Tr>
            <Td  px={["4","4","6"]}>
            <Checkbox colorScheme="pink"/>
            </Td>
            <Td>
              <Box>
                <Link color="pink.400" onMouseEnter={() => {}}>
                <Text fontWeight="bold">Paulo Henrique</Text>
                </Link>
                <Text fontSize="sm" color="gray.300">Gato@miau.com</Text>
              </Box>
            </Td>
            { isWideVersion && <Td>22 de Abril de 2021</Td> }
            { isWideVersion && <Td>
            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>
          { isWideVersion ? 'Editar' : '' }
        </Button>
            </Td> }
          </Tr>            
        </Tbody>
      </Table>
      <Pagination
      totalCountOfRegisters={20}
      currentPage={page}
      onPageChange={setPage}
      /> */}
      </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1)

  return {
    props: {
      users,
    }
  }
}