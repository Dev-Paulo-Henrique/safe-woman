import { Flex,  Button, Stack, Divider, HStack, Text, Icon, Checkbox } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { GetStaticProps } from 'next'
import toast, { Toaster } from 'react-hot-toast';
// import { useAuth } from '../services/hooks/useAuth'
import Head from 'next/head'
import { useRouter } from "next/router";
import { auth, database } from "../services/firebase";
import { push, ref, set, get, child } from "firebase/database";
import { useState } from 'react'
import { theme } from '../styles/theme'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Link from 'next/link'
import { RiGoogleFill, RiFacebookFill } from 'react-icons/ri'
import { sendPasswordResetEmail } from 'firebase/auth';


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
  // const [ checkbox, setCheckbox ] = useState(true)
  const [ password, setPassword ] = useState('')
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const provider = new GoogleAuthProvider();

  const dbRef = ref(database);

  const date = new Intl.DateTimeFormat('pt-BR', {
    month: 'long'
  }).format(new Date())

  const month = date.charAt(0).toUpperCase() + date.slice(1)
  
  const { errors } = formState

  async function handleLoginWithGoogle(){
    await signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const newPostKey = push(child(ref(database), 'users')).key;
    console.log(token)

    set(ref(database, `users/`), {
      email: user.email
    });

    get(child(dbRef, `count/${month}/`)).then((snapshot) => {
      if (snapshot.exists()) {
        let count = snapshot.val().count + 1
        set(ref(database, `count/${month}/`), {
          count: count
        });
      } else {
        set(ref(database, `count/${month}/`), {
          count: 1
        });
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    // ...
    toast.success('Logado');
    router.push('/dashboard')
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

  async function resetPassword(){
    await sendPasswordResetEmail(auth, email)
    .then((result) => {
      toast.success('Verifique seu E-mail');
      // router.push('/dashboard')
    }).catch((error) => {
      // toast.error('Digite seu E-mail');
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      if(errorCode === 'auth/user-not-found'){
        toast.error('Usuário não encontrado');
      }else if(errorCode === 'auth/invalid-email'){
        toast.error('E-mail inválido');
      }else if(errorCode === 'auth/missing-email'){
        toast.error('E-mail ausente');
      }
      // toast.error(errorCode, errorMessage);
      // ...
    });
  }

  
  const handleSignIn: SubmitHandler<SignInFormData> = async (values)=>{
    new Promise(resolve => setTimeout(resolve, 2000))
    // set(ref(database, 'users/' + new Date().getUTCMonth() + '/'), {
    //   email: email,
    //   password: password,
    // });
    // toast.success('Logado');
    // router.push('/dashboard')
    // console.log(values)
    await signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      get(child(dbRef, `count/${month}/`)).then((snapshot) => {
        if (snapshot.exists()) {
          let count = snapshot.val().count + 1
          set(ref(database, `count/${month}/`), {
            count: count
          });
        } else {
          set(ref(database, `count/${month}/`), {
            count: 1
          });
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      console.log('usuário', user)
      // ...
      toast.success('Sucesso', {
        duration: 4000,
      });
      router.push('/dashboard')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    toast.error('Senha incorreta', {
      duration: 4000,
    });
  });
  }
  

  return (
<Flex w="100vw" h="100vh" align="center" justify="center">
<Head>
    <title>Login | SW</title>
    </Head>
<Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
         <Stack spacing="4">
         <Input name="email" type="email" label="E-mail" {...register('email')} error={errors.email} onChange={event => setEmail(event.target.value)}/>
         <Input name="password" type="password" label="Senha" {...register('password')} error={errors.password} onChange={event => setPassword(event.target.value)}/>
         </Stack>
         <Flex justifyContent="space-between" alignItems="center">
         <Link href="/users/create" passHref>
        <Button as="a" w={140} mt="6" colorScheme="whiteAlpha" size="lg">Criar</Button>
          </Link>
         <Button w={140} type="submit" mt="6" colorScheme="pink"  size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
        <Flex justifyContent="flex-end" alignItems="center" mt="3">
        {/* <Checkbox borderColor="gray.300" colorScheme="pink" onChange={() => checkbox ? setCheckbox(false) : setCheckbox(true)}><Text color="gray.300">Lembrar-me</Text></Checkbox> */}
        <Text color="gray.300" onClick={resetPassword} _hover={{color: theme.colors.pink[400], transition: '0.25s', cursor: 'pointer'}}>
          Esqueceu a senha?
          </Text>
        </Flex>
         <Divider my="3" borderColor="gray.300"/>
         {/* <Button type="button" mb="3" colorScheme="facebook" isDisabled size="lg" onClick={() => toast("Desenvolvendo...")}><Icon as={RiFacebookFill} fontSize="30"/></Button> */}
         <Button type="button" colorScheme="red"  size="lg" onClick={handleLoginWithGoogle}><Icon as={RiGoogleFill} fontSize="30"/></Button>
         <Text color="gray.300" fontSize="0.8rem" align="center" mt="3">
          Ao continuar, você concorda com os
          <b><Link href="/_/_/policy/terms-of-service" passHref> Termos de Serviço</Link></b>
          , com a
          <b><Link href="/_/_/policy/privacy-policy" passHref> Política de Privacidade </Link></b>
           e com o
          <b><Link href="/_/_/policy/use-of-cookies" passHref> uso de cookies </Link></b>
            da Safe Woman.</Text>
        </Flex>
    </Flex>
  )
}
