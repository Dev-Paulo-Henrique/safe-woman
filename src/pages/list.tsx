import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { RiListCheck2, RiPencilLine } from "react-icons/ri";
import { Header } from "../components/Header";
import Pagination from "../components/Pagination";
import { Sidebar } from "../components/Sidebar";
import NextLink from 'next/link'
import { getUsers, useUsers } from "../services/hooks/useUsers";
import { useState,  } from "react";
import { queryClient } from "../services/queryClient";
import { api } from "../services/api";
import { GetServerSideProps } from "next";
import { theme } from "../styles/theme";
// import { database, onValue, ref, onChildAdded } from "../services/firebase";
import Modal from "react-modal";
// import useRoom from "../services/hooks/useRoom";
// import { useRouter } from "next/router";

type RoomQueryParams = {
  id?: string;
};


export default function UserList({ users }){
  // const router = useRouter();
  // const { id: roomId }: RoomQueryParams = router.query;
  // const { questions } = useRoom(roomId);
  const [page, setPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ username, setUsername ] = useState('')
  const [ local, setLocal ] = useState('')
  const [ date, setDate ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ description, setDescription ] = useState('')

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


//   const roomRef = ref(database, 'forms/');
// onChildAdded(roomRef, (snapshot) => {
//   setUsername(snapshot.val().username)
//   setLocal(snapshot.val().local)
//   setDate(snapshot.val().date)
//   setEmail(snapshot.val().email)
//   setDescription(snapshot.val().description)
//   }, {
//     onlyOnce: true
//   })

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
          Relatos
          { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/> }
          </Heading>
          <Button size="sm" fontSize="sm" colorScheme="pink" isDisabled>
          73 Relatos
        </Button>
      </Flex>
      {/* { isLoading ? (
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
      )} */}
      {/* FAKE */}
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Usuário</Th>
            { isWideVersion && <Th>Data</Th> }
            <Th>Local</Th>
          </Tr>
        </Thead>
        <Tbody>
        <Tr>
      <Td>
        <Box>
          <Link color="pink.400" onClick={() => setIsModalOpen(true)}> {/*RELATO AO CLICAR NO LINK*/}
          <Text fontWeight="bold">Paulo Santos</Text>
          </Link>
          <Text fontSize="sm" color="gray.300">gato@miau.com</Text>
        </Box>
      </Td>
      { isWideVersion && <Td>18/03/2004</Td> }
      <Td>Recife</Td>
    </Tr> 
        </Tbody>
      </Table>
      <Pagination
      totalCountOfRegisters={20}
      currentPage={page}
      onPageChange={setPage}
      />
      <Modal
          isOpen={isModalOpen}
          ariaHideApp={false}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Ver comentário"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.90)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
            content: {
              position: "initial",
              width: "37rem",
              maxWidth: "90vw",
              height: "23rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
              border: "none",
              background: "transparent",
            },
          }}
        >
          <Flex h="100%" w="100%" flexDirection="column" justifyContent="center" alignItems="center">

            <Text fontWeight="bold" fontSize="25" mt="6rem"  textAlign="center">Paulo Santos</Text>
            <Text mb="2rem" overflowY="auto"
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
        background: theme.colors.pink[500],
      },
    }}>HEHE</Text>
              <Button p="0.875rem 2rem" bg={theme.colors.pink[500]} border="1px solid transparent" borderRadius="0.5rem" _hover={{
      bg: theme.colors.pink[600]
    }} type="button" onClick={() => setIsModalOpen(false)}>
                Voltar
              </Button>
          </Flex>
        </Modal>
      </Box>
      </Flex>
    </Box>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { users, totalCount } = await getUsers(1)

//   return {
//     props: {
//       users,
//     }
//   }
// }