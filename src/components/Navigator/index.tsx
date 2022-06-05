import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure} from '@chakra-ui/react';
import { RiMenuLine, RiCloseLine, RiArrowDropRightLine, RiArrowDropDownLine } from 'react-icons/ri'
// import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon} from '@chakra-ui/icons';
import { theme } from "../../styles/theme";

  
  export function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('transparent', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <Icon as={RiCloseLine} w={3} h={3} /> : <Icon as={RiMenuLine} w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              _hover={{
                bg: 'gray.800',
                color: 'white'
              }}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems="center">
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('white', 'gray.800')}>
              <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
        Safe Woman
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={350}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              color={'gray.300'}
              href={'/users/create'}>
              Cadastrar
            </Button> */}
            <Button
            as={'a'}
              // display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.500'}
              href={'/login'}
              _hover={{
                bg: 'pink.400',
              }}>
              Login
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('pink.400', 'white');
    const popoverContentBgColor = useColorModeValue('gray.800', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.800', 'gray.900'), color: useColorModeValue('white', 'gray.900')}}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={RiArrowDropRightLine} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('gray.800', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
            color: 'pink.400'
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('white', 'gray.200')}
            _hover={{
              textDecoration: 'none',
              color: 'pink.400'
            }}>
            {label}
          </Text>
          {children && (
            <Icon
              as={RiArrowDropDownLine}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href} _hover={{
                  textDecoration: 'none',
                  color: 'pink.400'
                }}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Planos',
      children: [
        {
          label: 'Lite',
          subLabel: 'Disponível para 1 pessoa',
          href: '#',
        },
        {
          label: 'Duo',
          subLabel: 'Disponível para 2 pessoas',
          href: '#',
        },
        {
          label: 'Basic',
          subLabel: 'Disponível para 3 pessoas',
          href: '#',
        },
        {
          label: 'Classic',
          subLabel: 'Disponível para 5 pessoas',
          href: '#',
        },
        {
          label: 'Premium',
          subLabel: 'Disponível para 10 pessoas',
          href: '#',
        },
      ],
    },
    {
      label: 'Clientes',
      href: '/users',
    },
    {
      label: 'Contato',
      children: [
        {
          label: 'WhatsApp',
          subLabel: 'Atendimento humano',
          href: 'https://buy.stripe.com/test_14k9C63t1f0n4UMaF4',
        },
        {
          label: 'Instagram',
          subLabel: 'Atendimento humano',
          href: 'https://buy.stripe.com/test_cN28y20gP9G372U28z',
        },
        {
          label: 'E-mail',
          subLabel: 'Atendimento humano',
          href: 'https://buy.stripe.com/test_fZecOibZx3hFaf65kM',
        },
      ],
    },
    {
      label: 'Sobre',
      href: '#',
    },
  ];