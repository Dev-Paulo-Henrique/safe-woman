import { Flex } from '@chakra-ui/react'
import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'

export function Header() {
  return(
    <Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" mt="4" align="center" px="6">
      <Logo/>
      <SearchBox/>
      <Flex align="center" ml="auto" >
        <NotificationsNav/>
        <Profile/>
      </Flex>
    </Flex>
  );
}