import {
  AspectRatio,
    Box,
    Button,
    Center,
    chakra,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    Text,
    theme,
    useBreakpointValue,
    useColorModeValue,
    VisuallyHidden,
    VStack,
    SimpleGrid
  } from '@chakra-ui/react';
  import toast, { ErrorIcon, Toaster } from 'react-hot-toast';
  import * as yup from 'yup';
  import { yupResolver } from '@hookform/resolvers/yup'
  import { RiInstagramFill, RiWhatsappFill, RiMailFill} from 'react-icons/ri';
  import { ReactNode, useState } from 'react';
  import { Logo } from '../Header/Logo'
  import React from 'react';
import { auth, database } from '../../services/firebase';
import { TextArea } from '../Form/TextArea';
import { Input } from '../Form/Input';
import { push, child, ref, set } from "firebase/database";
import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  username: string;
  email: string;
  password: string;
  message: string;
  tel: number;
}
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export function SmallWithLogoLeft() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
      })

      const signInFormSchema = yup.object().shape({
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        tel: yup.string().required('Telefone obrigatório').trim(),
        username: yup.string().required('Nome obrigatório').trim(),
        message: yup.string().required('Mensagem obrigatória').trim(),
      })

      const [ username, setUsername ] = useState('')
      const [ tel, setTel ] = useState('')
      const [ email, setEmail ] = useState('')
      const [ message, setMessage ] = useState('')
      const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
      })
        const { errors } = formState

      const handleSendForm: SubmitHandler<FormData> = async (values)=>{
        await new Promise(resolve => setTimeout(resolve, 2000))
        const newPostKey = push(child(ref(database), 'feedback')).key;
        set(ref(database, `feedback/${newPostKey}/`), {
          username: username,
          tel: tel,
          date: new Intl.DateTimeFormat('pt-BR', {
            year: 'numeric', month: '2-digit', day: '2-digit'
          }).format(new Date()),
          email: email,
          message: message,
        });

        setUsername('')
        setTel('')
        setEmail('')
        setMessage('')
      }




      return (
        <>
      {/* { isWideVersion && <> */}
      <Center mb="1.5rem">
        <Heading id="feedback">Fale Conosco</Heading>
      </Center>
      <Flex justifyContent="space-between" mx={useBreakpointValue({lg: '2rem'})}>
<Box as="form" flex="1" bg="transparent" borderRadius={8} p={["6", "8"]} onSubmit={handleSubmit(handleSendForm)}>
  <Heading size="lg" fontWeight="normal">Formulário</Heading>
  <Divider my="6" borderColor="gray.700"/>
  <VStack spacing="8">
    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
    <HStack>
    <Input name="name" type="text" label="Nome" border="1px" placeholder='e. g: John Smith' {...register('username')} error={errors.username} onChange={(event) => setUsername(event.target.value)} borderColor="gray.200"/>
    <Input name="telefone" type="tel" label="Telefone" border="1px" placeholder='+55 (xx) xxxx-xxxx' {...register('tel')} error={errors.tel} onChange={(event) => setTel(event.target.value)} borderColor="gray.200"/>
    </HStack>
    </SimpleGrid>
    <Input name="email" type="email" label="E-mail" border="1px" placeholder='mail@example.com' {...register('email')} error={errors.email} onChange={(event) => setEmail(event.target.value)} borderColor="gray.200"/>
    <TextArea name="message" label="Mensagem" bgColor="transparent" placeholder='Digite seu texto...' {...register('message')} error={errors.message} onChange={(event) => setMessage(event.target.value)} borderColor="gray.200" border="1px" _hover={{bg:'transparent'}} overflowY="auto"
css={{
  '&::selection': {
    background: theme.colors.pink[500],
  },
}}/>
  </VStack>
  <Flex mt="8" justify="flex-end">
    <HStack spacing="4">
      <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Enviar</Button>
    </HStack>
  </Flex>
  </Box>
  { isWideVersion && <>
  <Flex flexDirection="column" maxW="16rem" justifyContent="center" alignItems="center">
    <Box bg="gray.800" p="2rem 1rem" borderRadius={8}>
      <Text color="pink.500" fontWeight="bold" fontSize="2rem">Jaboatão dos Guararapes</Text>
      <Text color="GrayText" mb="1.5rem">+55 81 99294-3936</Text>
      <Text>R. Manoel Carneiro Leão, 1457 - Dois Carneiros, Jaboatão dos Guararapes - PE, 54280-530</Text>
    </Box>
  <AspectRatio ratio={16 / 9} w="16rem" h="13rem" m="1.5rem">
<iframe
src='https://maps.google.com/maps?q=r.%20manoel%20carneiro%20le%C3%A3o,%201457&t=&z=19&ie=UTF8&iwloc=&output=embed'
// alt='demo'
/>
</AspectRatio>
  </Flex>
</>
}
</Flex>
  {/* </>
} */}
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        position="relative">
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'row', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          { isWideVersion && <Text>© 2022 Safe Woman. Todos os direitos reservados</Text>}
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'WhatsApp'} href={'https://api.whatsapp.com/send?phone=5581992943936&text=Ol%C3%A1%2C%20tudo%20bem%3F'}>
              <RiWhatsappFill />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/safewoman22/'}>
              <RiInstagramFill />
            </SocialButton>
            <SocialButton label={'E-mail'} href={'mailto:safewoman22@gmail.com?subject=Busco%20atendimento%20humano'}>
              <RiMailFill />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      </>
    );
  }
