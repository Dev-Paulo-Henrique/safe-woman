import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
    { showProfileData && (
      <Box mr="4" textAlign="right">
      <Text>Paulo Henrique</Text>
      <Text color="gray.300" fontSize="small">paulinho@gmail.com</Text>
    </Box>
    )}
    <Avatar size="md" name="Paulo Henrique" src="https://github.com/Dev-Paulo-Henrique.png"/> 
    </Flex>
  )
}