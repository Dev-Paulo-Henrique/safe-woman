import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Paulo Henrique</Text>
      <Text color="gray.300" fontSize="small">paulinho@gmail.com</Text>
    </Box>
    <Avatar size="md" name="Paulo Henrique" src="https://github.com/Dev-Paulo-Henrique.png"/> 
    </Flex>
  )
}