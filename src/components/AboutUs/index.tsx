import { Box, Flex, Text, Heading, Avatar, Divider, Center, VStack, HStack, Button, Img, useBreakpointValue } from "@chakra-ui/react";
// import { SimpleSlider } from './Slider'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import Slider from "react-slick";

export function AboutUs(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
      })

    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        arrows: false,
        // centerPadding: '60px',
      };

      var settingsMobile = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        arrows: false,
        // centerPadding: '120px',

      }
    return(
        <>
          <Center id="aboutUs" mt="2rem">
        <Heading>Nossa Equipe</Heading>
      </Center>
        { isWideVersion ? <>
        <Box my="4rem">
        <Slider {...settings}>
            <Flex>
            <Center>
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99beb914e288c5a6d97f/download/Geovana.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Geovana Silva</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Análise</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c1b3cae167b7430287/download/Paulo.jpg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Paulo Santos</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Desenvolvimento</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99bf1bbe03889a69f10f/download/Rayssa.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Rayssa Silva</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Design</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c63d885c76db91d799/download/Eduarda.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Eduarda Silva</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Gestão</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c0028fa042d6ea7aa0/download/Daniel.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Daniel Santos</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Marketing</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99bb367e7b76cf442ce1/download/Erica.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Erica Santiago</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Negócios</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c34265ae6247687fb9/download/Caillany.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Caillany Mariano</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Suporte</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c5bbe8bd019c30ce54/download/Aline.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Aline Lins</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Teste</Text>
            </Flex>
            </Slider>

            <Flex m="2rem" justifyContent="space-between">
            <Flex justifyContent="space-between" flexDir="column">
            <Text fontSize="4rem" fontWeight="bold" align="center">Quem somos?</Text>
            <Text align="justify">A Safe Woman é uma startup de segurança brasileira focada em entregar o melhor valor a seus clientes. Nós começamos a operar em Abril de 2022 com os melhores profissionais do país. Nossa especialidade é no desenvolvimento e aprimoração da segurança feminina utilizando as melhores tecnologias.</Text>
            <Text alig="justify">A Safe Woman segue uma filosofia simples de Oss: dedicar seu talento e tecnologia à criação de produtos e serviços superiores que contribuam para uma sociedade global melhor.</Text>
            </Flex>
            <Img maxW="28rem" borderRadius={8} ml={4} src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/62a9bf0d5caccd08b376817f/download/grupo.jpg"/>
            </Flex>
        </Box>
        </>
        : 
        <Box my="4rem">
        <Slider {...settingsMobile}>
            <Flex>
            <Center>
            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99beb914e288c5a6d97f/download/Geovana.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Geovana Silva</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Análise</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c1b3cae167b7430287/download/Paulo.jpg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Paulo Santos</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Desenvolvimento</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99bf1bbe03889a69f10f/download/Rayssa.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Rayssa Silva</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Design</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c63d885c76db91d799/download/Eduarda.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Eduarda Silva</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Gestão</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c0028fa042d6ea7aa0/download/Daniel.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Daniel Santos</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Marketing</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99bb367e7b76cf442ce1/download/Erica.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Erica Santiago</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Negócios</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c34265ae6247687fb9/download/Caillany.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Caillany Mariano</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Suporte</Text>
            </Flex>
            <Flex>
            <Center>

            <Avatar size="2xl" src="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/629a99c5bbe8bd019c30ce54/download/Aline.jpeg"/>
            </Center>
            <Text fontSize="lg" mt="0.5rem" textAlign="center">Aline Lins</Text>
            <Text color="gray.300" fontSize="small" textAlign="center">Teste</Text>
            </Flex>
            </Slider>
        </Box>
         }
        </>
    )
}