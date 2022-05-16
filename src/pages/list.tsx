import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { RiBookOpenLine } from "react-icons/ri";
import { Header } from "../components/Header";
import Pagination from "../components/Pagination";
import { Sidebar } from "../components/Sidebar";
// import NextLink from 'next/link'
import { getUsers, useUsers } from "../services/hooks/useUsers";
import { useState,  } from "react";
// import toast, { Toaster } from 'react-hot-toast';
// import { queryClient } from "../services/queryClient";
// import { api } from "../services/api";
import Swal from 'sweetalert2';
import 'animate.css';
// import { GetServerSideProps } from "next";
import Head from 'next/head'
import { theme } from "../styles/theme";
import { database } from "../services/firebase";
import { onValue, ref, get, child } from 'firebase/database'
// import Modal from "react-modal";
// import useRoom from "../services/hooks/useRoom";
import { makeServer } from '../services/mirage'
// import { useRouter } from "next/router";

type RoomQueryParams = {
  id?: string;
};


export default function UserList({ users }){
  makeServer()
  // const router = useRouter();
  // const { id: roomId }: RoomQueryParams = router.query;
  // const { questions } = useRoom();
  const [page, setPage] = useState(1)
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [ username, setUsername ] = useState('')
  // const [ local, setLocal ] = useState('')
  // const [ date, setDate ] = useState('')
  // const [ email, setEmail ] = useState('')
  // const [ description, setDescription ] = useState('')
  const [ size, setSize ] = useState(0)

  const { data, isLoading, isFetching, error } = useUsers(page, {
    initialData: users,
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  // async function handlePrefetchUser(userId: string){
  //   await queryClient.prefetchQuery(['user', userId], async () => {
  //     const response = await api.get(`users/${userId}`)
  //     return response.data
  //   }, {
  //     staleTime: 1000 * 60 * 10
  //   })
  // }

  const roomRef = ref(database);
  const map = get(child(roomRef, `forms/`)).then((snapshot) => {
    setSize(snapshot.size)
  })

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
    <title>Relatos | SW</title>
    </Head>
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
          200 Relatos
        </Button>
      </Flex>
      { isLoading ? (
        <Flex justify="center" >
          <Spinner/>
        </Flex>
      ) : error ? (
        <Flex justify="center" >
          <Text>Falha ao obter relatos dos usuários.</Text>
        </Flex>
      ): (
        <>
        <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Usuário</Th>
            { isWideVersion && <Th>Data</Th> }
            { isWideVersion && <Th>Local</Th> }
            <Th>Relatos</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data['users'].map(user => {
            return (
              <>
              <Tr key={user.id}>
            <Td>
              <Box>
                <Text color="pink.400" fontWeight="bold">{user.name}</Text>
                <Link href={`mailto:${user.email}?Subject=Oi%20${user.name}`}>
                <Text fontSize="sm" color="gray.300">{user.email}</Text>
                </Link>
              </Box>
            </Td>
            { isWideVersion && <Td>{user.sendAt}</Td> }
            { isWideVersion && <Td>{user.local}</Td> }
            <Td>
              <Button size="sm" leftIcon={<Icon as={RiBookOpenLine}/>} fontSize="sm" colorScheme="pink" onClick={() => Swal.fire({
  title: `Relato de ${user.name}`,
  text: user.description,
  confirmButtonColor: '#D53F8C',
  confirmButtonText: 'Voltar',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})}>
              Ler
            </Button>
            </Td>
          </Tr>
          </>
            )
          })}
        </Tbody>
      </Table>
      <Pagination
      totalCountOfRegisters={data['totalCount']}
      currentPage={page}
      onPageChange={setPage}
      />
        
      
        </>
      )}
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