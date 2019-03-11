import { Theme, SpaceProps } from 'styled-system';

export const theme = {
  colors: {
    primary: '#f1d9cd',
    secondary: '#0e103d',
    black: '#1b1b1b',
    white: '#fdfdfd',
  },
  shadows: {
    sm: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: `0 4px 8px 0 rgba(0,0,0,0.12),
        0 2px 4px 0 rgba(0,0,0,0.08)`,
    lg: `0 15px 30px 0 rgba(0,0,0,0.11),
        0 5px 15px 0 rgba(0,0,0,0.08)`,
    inner: `inset 0 2px 4px 0 rgba(0,0,0,0.06)`,
    outline: `0 0 0 3px rgba(52,144,220,0.5)`,
    none: 'none',
  },
};

export type TColor = {
  bg?: keyof typeof theme.colors;
  color?: keyof typeof theme.colors;
};

export type TShadow = {
  boxShadow: keyof typeof theme.shadows;
};

type Space = SpaceProps;
