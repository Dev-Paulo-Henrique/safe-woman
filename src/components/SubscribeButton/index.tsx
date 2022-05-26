// import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import { Box, Flex, Text, Heading, Divider, VStack, HStack, Button, Img } from "@chakra-ui/react";
// import styles from './styles.module.scss'

export function SubscribeButton(){
//   const [session] = useSession()
  const router = useRouter()
  
  async function handleSubscribe(){
    // if(!session){
    //   signIn('github')
    //   return
    // }

    // if(session.activeSubscription){
    //   router.push('/posts')
    //   return
    // }
      router.push('https://buy.stripe.com/test_dR6eWq2oX4lJaf68wU')
    
    // try{
    //   const response = await api.post('/subscribe')
      
    //   const { sessionId } = response.data

    //   const stripe = await getStripeJs()

    //   await stripe.redirectToCheckout({sessionId})

    // }catch(err){
    //   alert(err.message)
    // }
    
  }
  
  return (
    <Button
    onClick={handleSubscribe}
    as="button"
    mt="1.5rem"
    w="260px"
    h="4rem"
    border="0"
    borderRadius="2rem"
    bg="pink.500"
    color="white"
    fontSize="1.5rem"
    fontWeight="bold"
    display="flex"
    alignItems="center"
    justifyContent="center"
    _hover={{
      bg: 'pink.400',
    }}
    >
      Obter
    </Button>
  )
}