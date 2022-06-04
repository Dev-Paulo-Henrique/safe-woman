import { Box, Flex, Text, Heading, Avatar, Divider, Center, VStack, HStack, Button, Img } from "@chakra-ui/react";

export function AboutUs(){
    return(
        <>
        <Flex flex="1" justifyContent="space-between" flexWrap="wrap" margin="2rem">
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99beb914e288c5a6d97f/download/Geovana.jpeg"/>
            <Text fontSize="lg" mt="0.5rem">Geovana Silva</Text>
            <Text color="gray.300" fontSize="small">Análise</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c1b3cae167b7430287/download/Paulo.jpg"/>
            <Text fontSize="lg" mt="0.5rem">Paulo Santos</Text>
            <Text color="gray.300" fontSize="small">Desenvolvimento</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99bf1bbe03889a69f10f/download/Rayssa.jpeg"/>
            <Text fontSize="lg" mt="0.5rem">Rayssa Silva</Text>
            <Text color="gray.300" fontSize="small">Design</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c63d885c76db91d799/download/Eduarda.jpeg"/>
            <Text fontSize="lg" mt="0.5rem">Eduarda Silva</Text>
            <Text color="gray.300" fontSize="small">Gestão</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c0028fa042d6ea7aa0/download/Daniel.jpeg"/>
            <Text fontSize="lg" mt="0.5rem">Daniel Santos</Text>
            <Text color="gray.300" fontSize="small">Marketing</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99bb367e7b76cf442ce1/download/Erica.jpeg"/>
            <Text fontSize="lg" mt="0.5rem">Erica Santiago</Text>
            <Text color="gray.300" fontSize="small">Negócios</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c34265ae6247687fb9/download/Caillany.jpeg"/>
            <Text fontSize="lg" mt="0.5rem">Caillany Mariano</Text>
            <Text color="gray.300" fontSize="small">Suporte</Text>
            </Flex>
            <Flex flexBasis="50%" mb="2rem" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c5bbe8bd019c30ce54/download/Aline.jpeg"/>
            <Text fontSize="lg" mt="0.5rem">Aline Lins</Text>
            <Text color="gray.300" fontSize="small">Teste</Text>
            </Flex>
        </Flex>
        </>
    )
}