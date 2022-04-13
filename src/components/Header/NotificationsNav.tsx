import { Icon, HStack, Link as ChakraLink, LinkProps as ChakraLinkProps} from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import { ElementType } from 'react'
import { ActiveLink } from "../ActiveLink";

interface IconLinkProps extends ChakraLinkProps{
  icon: ElementType;
  href: string;
}

export function NotificationsNav({icon, href, ...rest}:IconLinkProps) {
  return (
    <HStack spacing={["6", "8"]} mx={["6", "8"]} pr={["6", "8"]} py="1" color="gray.300" borderRightWidth={1} borderColor="gray.700">
          <ActiveLink href="/notifications" passHref>
    <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={RiNotificationLine} fontSize="20" cursor={"pointer"}/>
      </ChakraLink>
      </ActiveLink>
          <ActiveLink href="/users/create" passHref>
    <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={RiUserAddLine} fontSize="20" cursor={"pointer"}/>
      </ChakraLink>
      </ActiveLink>
        </HStack>
  )
}