import { Box, Flex, Text, Heading, Avatar, Divider, Center, VStack, HStack, Button, Img } from "@chakra-ui/react";

export function AboutUs(){
    return(
        <>
        <Flex flex="1" justifyContent="space-between" flexWrap="wrap" margin="2rem">
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar/>
            <Text>Geovana Evelyn</Text>
            <Text color="gray.300" fontSize="small">Análise</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar/>
            <Text>Paulo Santos</Text>
            <Text color="gray.300" fontSize="small">Desenvolvimento</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar/>
            <Text>Rayssa Vitória</Text>
            <Text color="gray.300" fontSize="small">Design</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar/>
            <Text>Eduarda Maria</Text>
            <Text color="gray.300" fontSize="small">Gestão</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar/>
            <Text>Caillany Maria</Text>
            <Text color="gray.300" fontSize="small">Gestão</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar/>
            <Text>Daniel Emerson</Text>
            <Text color="gray.300" fontSize="small">Marketing</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar/>
            <Text>Erica Karolainy</Text>
            <Text color="gray.300" fontSize="small">Negócios</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar/>
            <Text>Aline Lins</Text>
            <Text color="gray.300" fontSize="small">Teste</Text>
            </Flex>
        </Flex>
        </>
    )
}