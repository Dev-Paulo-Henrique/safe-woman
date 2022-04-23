import { Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { theme } from "../../styles/theme";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar =  useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerSidebar) {
    return(
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6"/>
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody direction="column" h="100vh" overflowY="auto"
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
          <SidebarNav/>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav/>
    </Box>
  );
}
