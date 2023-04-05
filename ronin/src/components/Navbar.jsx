import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Text,
  Divider,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';

const Links = ['MEN', 'WOMEN', 'MOBILE COVERS'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      borderBottom:'4px',
      borderColor:'#FF6000',
      borderRadius:0,
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box borderBottom={'1px'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} margin='auto'>
            <Box as='b'>RONIN</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <HStack>
                <HStack border={'1px'} borderColor={'gray.400'} borderRadius={'5px'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{width:'20%'}}/>
          <Input type={'search'} width='100%' placeholder='Search by product, category or collection' border={'0'} _focus={{boxShadow:'none'}}/>
                </HStack>
                <Text _hover={{cursor:'pointer'}}>Login</Text>
          <FontAwesomeIcon icon={faHeart}/>
          <FontAwesomeIcon icon={faBagShopping}/>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}