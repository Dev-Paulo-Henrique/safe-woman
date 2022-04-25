import { Flex,  Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { GetStaticProps } from 'next'
import toast, { Toaster } from 'react-hot-toast';
// import { useAuth } from '../services/hooks/useAuth'
import { useRouter } from "next/router";
// import { auth } from '../services/firebase'
// import { database } from "../services/firebase";
import { useState } from 'react'
import { theme } from '../styles/theme'


type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(8, 'Senha incompleta')
})

export default function SignIn() {
  const router = useRouter()
  // const { user, signInWithGoogle } = useAuth();
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  
  const { errors } = formState

  
  const handleSignIn: SubmitHandler<SignInFormData> = async (values)=>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    toast.success('Logado');
    router.push('/dashboard')
    // console.log(values)
  //   signInWithEmailAndPassword(auth, values.email, values.password)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   console.log('usuário', user)
  //   // ...
  //   toast.success('Enviado', {
  //     duration: 4000,
  //     position: 'bottom-center',
  //   });
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  //   toast.error(`${errorCode}`, {
  //     duration: 4000,
  //     position: 'bottom-center',
  //   });
  // });
  }
  

  return (
<Flex w="100vw" h="100vh" align="center" justify="center">
<Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
         <Stack spacing="4">
         <Input name="email" type="email" label="E-mail" {...register('email')} error={errors.email} onChange={event => setEmail(event.target.value)}/>
         <Input name="password" type="password" label="Senha" {...register('password')} error={errors.password} onChange={event => setPassword(event.target.value)}/>
         </Stack>
         <Button type="submit" mt="6" colorScheme="pink"  size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
         {/* <Button type="button" mt="6" colorScheme="pink"  size="lg" isLoading={formState.isSubmitting} onClick={handleLogin}>Login</Button> */}
    </Flex>
  )
}
