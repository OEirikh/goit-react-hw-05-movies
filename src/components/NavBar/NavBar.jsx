import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

// export default function NavBar() {
//   return (
//     <>
//       <Breadcrumb>
//         <BreadcrumbItem>
//           <BreadcrumbLink as={Link} to="/">
//             Home
//           </BreadcrumbLink>
//         </BreadcrumbItem>
//         <BreadcrumbItem>
//           <BreadcrumbLink as={Link} to="/movies">
//             Movies
//           </BreadcrumbLink>
//         </BreadcrumbItem>
//       </Breadcrumb>
//     </>
//   );
// }

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavLinkk = ({ children, link }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    as={NavLink}
    to={link}
  >
    {children}
  </Link>
);

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLinkk link={'/'}>Home </NavLinkk>
              <NavLinkk link={'/movies'}>Movies</NavLinkk>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLinkk link={'/'}>Home </NavLinkk>
              <NavLinkk link={'/movies'}>Movies</NavLinkk>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

NavBar.propTypes = {};
