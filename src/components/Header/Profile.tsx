import { Flex, Text, Box, Avatar, AvatarBadge, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
Button } from '@chakra-ui/react'
import { auth } from '../../services/firebase'
import { signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';


interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  const router = useRouter()
  function logOut(){
  signOut(auth).then(() => {
    toast.success('Desconectado');
    router.push('/login')
    // Sign-out successful.
  }).catch((error) => {
    toast.error('Erro');
    // An error happened.
  });
}
  return (
    <Flex align="center">
    {/* { showProfileData && (
      <Box mr="4" textAlign="right">
      <Text>{auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email.split('@')[0]}</Text>
      <Text color="gray.300" fontSize="small">{auth.currentUser?.email ? auth.currentUser?.email : ''}</Text>
    </Box>
    )} */}
    {/* {auth.currentUser?.email ? <Avatar size="md" name={auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email}>
<AvatarBadge boxSize='1.25em' bg='green.500' />
    </Avatar> : <Avatar size="md" name={auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email}>
   <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
    </Avatar>} */}

{ auth.currentUser?.email ?
  <Menu>
                <MenuButton
                  as="button"
                  rounded={'full'}
                  // variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar size="md" name={auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email.split('@')[0]}>
<AvatarBadge boxSize='1.25em' bg='green.500' />
    </Avatar>
                </MenuButton>
                <MenuList alignItems={'center'} bg="gray.800">
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      name={auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email.split('@')[0]}
                      />
                  </Center>
                  <br />
                  <Center>
                  <Text textTransform="capitalize">{auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email.split('@')[0]}</Text>
                  
                  </Center>
                  <br/>
                  <Center>
                  <Text color="gray.300" fontSize="small" mt="-40px">{auth.currentUser?.email}</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem _hover={{bg: "gray.600"}}>Configurações</MenuItem> */}
                  <MenuItem _hover={{bg: "gray.600"}} color="tomato" onClick={logOut}>Sair</MenuItem>
                </MenuList>
              </Menu>
              :
              <Avatar size="md">
   <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
    </Avatar>
}

    
    </Flex>
  )
}