/*
import './Navbar.css'
import React from 'react'
import imgLogo from '../../assets/img-login.jpg'
import { BsFillCartFill } from "react-icons/bs";

import { useNavigate } from 'react-router';

const NavbarComponent = () => {

  const navigate = useNavigate()

  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary class-navbar" bg="light" expand="lg">
  <div className="container-fluid">
    <img src={imgLogo} alt="" className='class-img'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 class-color-text">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="" onClick={()=> navigate('/home')}>Início</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contato</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sobre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Minha conta</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#"> <BsFillCartFill /> </a>
        </li>
      </ul>
      <form className="d-flex search-navbar" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarComponent
*/

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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import imgLogo from '../../assets/img-login2.png';
import './Navbar.css';

const Links = ['Dashboard', 'Projects', 'Team'];

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

  return (
    <>
      <Box bg={useColorModeValue('#539CCF', 'gray.900')} px={4}>
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
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <form className="d-flex search-navbar" role="search">
            <input className="form-control me-2" type="search" placeholder="..." aria-label="Search" />
            <button className="btn btn-outline-light btn-search" type="submit">Buscar</button>
          </form>
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

      <Box p={4}>Main Content Here</Box>
    </>
  );
}