import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { theme } from '../../../../styles/theme'

export default function useOfCookies(){
    return(
        <Box p="2rem 5rem" h="100vh" overflowY="auto"
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
            <Head>
                <title>Uso de Cookies | SW</title>
            </Head>
            <Text fontSize="4rem" mb="1.5rem">Uso de Cookies</Text>
            <Text align="justify">Utilizamos cookies de funcionalidade para nos permitir relembrar as preferências do usuário. Por exemplo, os cookies evitam digitar o nome do utilizador cada vez que este acede ao site. Também usamos cookies de funcionalidade para fornecer serviços avançados ao usuário, como por exemplo efetuar comentários a um artigo. Em resumo, os cookies de funcionalidade guardam as preferências do usuário relativamente à utilização do site, de forma que não seja necessário voltar a configurar o site cada vez que o visita.
            <br></br>
            <br></br>
            Alguns cookies são essenciais para acessar a áreas específicas do nosso site. Permitem a navegação no site e a utilização das suas aplicações, tal como acessar áreas seguras do site através de login. Sem estes cookies, os serviços que o exijam não podem ser prestados.</Text>
        </Box>
    )
}