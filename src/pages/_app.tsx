import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from "react-hot-toast";
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient'
import { AuthContextProvider } from "../contexts/AuthContext";
import Script from 'next/script'
import '../styles/chatButton.css'



// if(process.env.NODE_ENV === 'production'){
  makeServer()
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
        <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
        <Component {...pageProps} />
        <Toaster position="top-center" />
        </SidebarDrawerProvider>
        </ChakraProvider>
        <ReactQueryDevtools/>
    </QueryClientProvider>
    </AuthContextProvider>
    )
}

export default MyApp
