import React, { FC } from 'react';
import PropTypes from 'prop-types';

import './layout.css';
import styled, { ThemeProvider } from 'styled-components';
import { color, ColorProps, SpaceProps, boxShadow, BoxShadowProps } from 'styled-system';
import { theme, TColor, TShadow } from '../theme/theme';
import Header from './Header';

const Body = styled.div<TColor & SpaceProps>`
  ${color};
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div<TColor & TShadow>`
  ${color};
  ${boxShadow};
  max-width: 1400px;
  height: 90vh;
  max-height: 90vh;
  width: 95vw;
`;

const Main = styled.main``;

const Layout: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Body bg="primary">
      <Container bg="white" boxShadow="md">
        <Header />
        <Main>{children}</Main>
      </Container>
    </Body>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
