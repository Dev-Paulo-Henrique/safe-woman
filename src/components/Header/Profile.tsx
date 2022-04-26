import { Flex, Text, Box, Avatar } from '@chakra-ui/react'
import { auth } from '../../services/firebase'

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
    { showProfileData && (
      <Box mr="4" textAlign="right">
      <Text>{auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email.split('@')[0]}</Text>
      <Text color="gray.300" fontSize="small">{auth.currentUser?.email ? auth.currentUser?.email : ''}</Text>
    </Box>
    )}
    <Avatar size="md" name={auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email}/> 
    </Flex>
  )
}