import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { RiNotificationLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return(
    <Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" mt="4" align="center" px="6">
      { !isWideVersion && (
        <IconButton icon={<Icon as={RiMenuLine}/>} fontSize="24" variant="unstyled" onClick={onOpen} aria-label="Open Navigation" mr="2">

        </IconButton>
      ) }
      <Logo/>
      <Flex align="center" ml="auto" >
        { isWideVersion &&  <SearchBox/> }
        <NotificationsNav icon={RiNotificationLine} href="/notifications"/>
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}