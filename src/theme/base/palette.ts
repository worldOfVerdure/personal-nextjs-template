import { authorPalette, clientPalette } from '../config/chosenPaletteConfig.ts';
import { defaultPalette } from '../config/defualtPaletteConfig.ts';
import { PaletteOptions } from '@mui/material/styles';
import { PaletteTokenKey } from '../utils/paletteTypes.ts';
import { resolveColors } from '../utils/resolveColors.ts';

export type Mode = 'light' | 'dark';

export const createPalette = (
  mode: Mode,
): PaletteOptions => {
  const resolveToken = (
    key: PaletteTokenKey,
  ): string => {
    const clientValue = clientPalette[key]?.[mode];
    const authorValue = authorPalette[key]?.[mode];
    const defaultValue = defaultPalette[key]?.[mode];

    return resolveColors(clientValue, authorValue, defaultValue, mode).color;
  };

  return {
    mode,
    primary: {
      main: resolveToken('primaryMain'),
      contrastText: '#fff',
    },
    secondary: {
      main: resolveToken('secondaryMain'),
    },
    error: {
      main: resolveToken('errorMain'),
    },
    info: {
      main: resolveToken('infoMain'),
    },
    background: {
      default: resolveToken('backgroundDefault'),
      paper: resolveToken('backgroundPaper'),
    },
    text: {
      primary: resolveToken('textPrimary'),
      secondary: resolveToken('textSecondary'),
    },
    divider: resolveToken('divider')
  };
};
