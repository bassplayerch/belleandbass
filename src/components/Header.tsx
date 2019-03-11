import { Link } from 'gatsby';
import React, { FC } from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { TColor } from '../theme/theme';
import { color } from 'styled-system';

const Container = styled.header``;

const Header: FC = () => (
  <Container>
    <Menu />
  </Container>
);

export default Header;
