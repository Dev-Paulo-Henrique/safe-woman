import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar';


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
    enabled: false,
  },
  xaxis: {
    type: 'category',
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
      "Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov" , "Dec"
      
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
  { name: 'Registros', data: [31, 120, 10, 28, 109, 0, 0, 34, 0, 0, 45, 0] },
  { name: 'Wendy', data: [11, 32, 45, 32, 34, 0, 0, 0, 0, 0, 67, 0] },
  { name: 'Pagamentos', data: [41, 76, 24, 34, 12, 0, 0, 12, 0, 0, 0, 12] },
  { name: 'Clientes', data: [61, 43, 63, 24, 80, 0, 78, 0, 0, 24, 32, 0] },
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