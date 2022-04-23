import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from "react-hot-toast";
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient'
// import { AuthProvider } from "../contexts/AuthContext";


if(process.env.NODE_ENV === 'development'){
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
        <Component {...pageProps} />
        <Toaster position="bottom-center" />
        </SidebarDrawerProvider>
        </ChakraProvider>
        <ReactQueryDevtools/>
    </QueryClientProvider>
    // {/* </AuthProvider> */}
    )
}

export default MyApp
