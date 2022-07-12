import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import Head from 'next/head'
import { Sidebar } from '../components/Sidebar';
import { push, ref, set, get, child } from "firebase/database";
import { auth, database } from "../services/firebase";

// const dbRef = ref(database);

// const date = new Intl.DateTimeFormat('pt-BR', {
//   month: 'long'
// }).format(new Date())

// const month = date.charAt(0).toUpperCase() + date.slice(1)

// const getCount = get(child(dbRef, `count/`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     alert(snapshot.ref)
//   } else {
//     alert("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
      theme: 'dark',
  },
  xaxis: {
    // type: "category",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      // "2018-09-19T01:30:00.000Z", 
      // "2018-09-19T02:30:00.000Z", 
      // "2018-09-19T03:30:00.000Z", 
      // "2018-09-19T04:30:00.000Z", 
      // "2018-09-19T05:30:00.000Z", 
      
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
      
      // '2021-03-18T00:00:00.000Z', dia
      // '2021-03-19T00:00:00.000Z',
      // '2021-03-20T00:00:00.000Z',
      // '2021-03-21T00:00:00.000Z',
      // '2021-03-22T00:00:00.000Z',
  ]
  },
  fill:{
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  { name: 'Clientes', data: [61, 43, 63, 24, 80, 20, 78, 70, 12, 24, 32, 30] },
  { name: 'Downloads', data: [11, 32, 45, 32, 34, 20, 40, 30, 60, 20, 67, 70] },
  { name: 'Pagamentos', data: [41, 76, 24, 34, 12, 30, 50, 12, 50, 90, 20, 12] },
  { name: 'Registros', data: [31, 120, 10, 28, 109, 70, 10, 34, 40, 40, 45, 60] },
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" overflowY="auto"
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
    <title>Painel de controle | SW</title>
    </Head>
      <Header/>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Sidebar/>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
        <Text fontSize="lg" mb="4">Painel de controle</Text>
          <Chart options={options} series={series} type="area" height={350}/> 
        </Box>
      </SimpleGrid>
      </Flex>
    </Flex>
  );
}