import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import imgLogo from '../../assets/img-login.jpg';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Links = ['Minha conta', 'Contato', 'Sobre'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavbarComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate()

  return (
    <>
      <Box bg={useColorModeValue('#539CCF', 'gray.900')} px={4}>
        <Stack direction={'row'} spacing={7}>        

          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />

            <HStack spacing={8} alignItems={'center'}>
              {/* <Box>{imgLogo}</Box> */}
              <img src={imgLogo} alt="" className='class-img'/>
              <HStack color={'white'} as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => ( <NavLink key={link}>{link}</NavLink>))}
              </HStack>
            </HStack>

            <form className="d-flex search-navbar" role="search">
              <input className="form-control me-2" type="search" placeholder="..." aria-label="Search" />
              <button className="btn btn-outline-light btn-search" type="submit">Buscar</button>
            </form>

            <Button onClick={toggleColorMode} marginRight={'2%'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton 
                  marginRight={'2%'}
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
                </MenuButton>

                <MenuList alignItems={'center'}>

                  <br />
                  <Center>
                    <Avatar size={'2xl'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
                  </Center>
                  
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>

                  <br />
                  <MenuDivider />

                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={() => { navigate('/login') }}>Logout</MenuItem>
                </MenuList>
              </Menu>

          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => ( <NavLink key={link}>{link}</NavLink> ))}
              </Stack>
            </Box>
          ) : null}
        </Stack>
      </Box>
    </>
  );
}