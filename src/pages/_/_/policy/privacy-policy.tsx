import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { theme } from '../../../../styles/theme'

export default function privacyPolicy(){
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
                <title>Política de Privacidade | SW</title>
            </Head>
            <Text fontSize="4rem" mb="1.5rem">Política de Privacidade</Text>
            <Text align="justify">A sua privacidade é importante para nós. É política do Safe Woman respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site Safe Woman , e outros sites que possuímos e operamos.
            <br></br>
            <br></br>
Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
<br></br>
<br></br>
Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
<br></br>
<br></br>
Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
<br></br>
<br></br>
O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
<br></br>
<br></br>
Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
<br></br>
<br></br>
O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.
<br></br>
<br></br>
<Text fontSize="2rem">
Compromisso do Usuário
</Text>
<br></br>
O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Safe Woman oferece no site e com caráter enunciativo, mas não limitativo:
<br></br>
<br></br>
A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
<br></br>
B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, Onde dá a Bola ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
<br></br>
C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Safe Woman , de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
<br></br>
<br></br>
Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
<br></br>
<br></br>
Esta política é efetiva a partir de Novembro/2022.</Text>
        </Box>
    )
}