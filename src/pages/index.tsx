import { Flex,  Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'

interface HomeProps{
  product: {
    priceId: string;
    amount: string;
  }
}

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn({product}: HomeProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values)=>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
<Flex w="100vw" h="100vh" align="center" justify="center">
<Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
         <Stack spacing="4">
         <Input name="email" type="email" label="Email" {...register('email')} error={errors.email} value={product.amount}/>
         <Input name="password" type="password" label="Senha" {...register('password')} error={errors.password}/>
         </Stack>
         <Button type="submit" mt="6" colorScheme="pink"  size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const price = await stripe.prices.retrieve('price_1Kn4w0GnuxSAi5xdYoovADFZ', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL',
    }).format((price.unit_amount / 100)),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}