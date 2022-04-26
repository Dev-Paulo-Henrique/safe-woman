import { Icon, HStack, Link as ChakraLink, LinkProps as ChakraLinkProps} from '@chakra-ui/react'
import { RiLogoutBoxRLine, RiUserAddLine } from 'react-icons/ri'
import { ElementType } from 'react'
import { ActiveLink } from "../ActiveLink";
import { auth } from '../../services/firebase'
import { signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';


interface IconLinkProps extends ChakraLinkProps{
  icon: ElementType;
  href: string;
}

export function NotificationsNav({icon, href, ...rest}:IconLinkProps) {
  const router = useRouter()
  function logOut(){
  signOut(auth).then(() => {
    toast.success('Desconectado');
    router.push('/')
    // Sign-out successful.
  }).catch((error) => {
    toast.error('Erro');
    // An error happened.
  });
}
    return (
    <HStack spacing={["6", "8"]} mx={["6", "8"]} pr={["6", "8"]} py="1" color="gray.300" borderRightWidth={1} borderColor="gray.700">
          {/* <ActiveLink href="/" passHref> */}
    <ChakraLink display="flex" align="center" {...rest}>
        {auth.currentUser?.uid ? <Icon as={RiLogoutBoxRLine} fontSize="20" cursor={"pointer"} onClick={logOut}/> : ''}
      </ChakraLink>
      {/* </ActiveLink> */}
          <ActiveLink href="/users/create" passHref>
    <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={RiUserAddLine} fontSize="20" cursor={"pointer"}/>
      </ChakraLink>
      </ActiveLink>
        </HStack>
  )
}