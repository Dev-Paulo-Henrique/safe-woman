import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return(
    <Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" mt="4" align="center" px="6">
      <Logo/>
      <Flex align="center" ml="auto" >
        { isWideVersion &&  <SearchBox/> }
        <NotificationsNav/>
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}