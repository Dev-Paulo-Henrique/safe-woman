import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { theme } from '../../../../styles/theme'

export default function termsOfService(){
    return(
        <>
            you&apos;re free
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
                <title>Termos de Serviço | SW</title>
            </Head>
            <Text fontSize="4rem" mb="1.5rem">Termos de Serviço</Text>
            <Text align="justify">1. Ao acessar o site Safe Woman , concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                <br></br><br></br>2. Uso de licença é concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Safe Woman , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Safe Woman ; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor. Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Safe Woman a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                <br></br><br></br>3. Isenção de responsabilidade Os materiais no site da Safe Woman são fornecidos 'como estão'. Safe Woman não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. Além disso, o Safe Woman não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                <br></br><br></br>4. Limitações Em nenhum caso o Safe Woman ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Safe Woman , mesmo que Safe Woman ou um representante autorizado da Safe Woman tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentes, essas limitações podem não se aplicar a você.
                <br></br><br></br>5. Precisão dos materiais Os materiais exibidos no site da Safe Women podem incluir erros técnicos, tipográficos ou fotográficos. Safe Woman não garante que qualquer material em seu site seja preciso, completo ou atual. Safe Woman pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Safe Woman não se compromete a atualizar os materiais.
                <br></br><br></br>6. O Safe Woman não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Safe Woman do site. O uso de qualquer site vinculado é por conta e risco do usuário. Modificações O Safe Woman pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes termos de serviço. Lei aplicável Estes termos e condições são regidos e interpretados de acordo com as leis do Safe Woman e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</Text>
        </Box>
            </>
    )
}
