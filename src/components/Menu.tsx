import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Routes } from '../constants/routes';

type Props = {};

const Nav = styled.nav``;

const MenuLink = styled(Link)``;

const Menu: FC<Props> = () => {
  return (
    <Nav>
      <MenuLink to={Routes.HOME}>Home</MenuLink>
      <MenuLink to={Routes.HOME}>Über uns</MenuLink>
      <MenuLink to={Routes.HOME}>Sound</MenuLink>
      <MenuLink to={Routes.HOME}>Galerie</MenuLink>
      <MenuLink to={Routes.HOME}>Angebote</MenuLink>
      <MenuLink to={Routes.HOME}>Kontakt</MenuLink>
    </Nav>
  );
};

export default Menu;
