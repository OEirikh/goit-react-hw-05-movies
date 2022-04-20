import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container maxW="1100px">
      <NavBar />
      <Outlet />
    </Container>
  );
};
