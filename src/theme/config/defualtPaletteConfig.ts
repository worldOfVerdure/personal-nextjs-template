type DefaultPaletteType = {
  light: string,
  dark: string
}

export interface DefaultPaletteConfig {
  primaryMain: DefaultPaletteType;
  secondaryMain: DefaultPaletteType;
  backgroundDefault: DefaultPaletteType;
  backgroundPaper: DefaultPaletteType;
  textPrimary: DefaultPaletteType;
  textSecondary: DefaultPaletteType;
  errorMain: DefaultPaletteType;
  infoMain: DefaultPaletteType;
  divider: DefaultPaletteType;
}

export const defaultPalette: DefaultPaletteConfig = {
  primaryMain: {
    light: '#1976d2',
    dark: '#90caf9'
  },
  secondaryMain: {
    light: '#9c27b0',
    dark: '#ce93d8'
  },
  backgroundDefault: {
    light: '#f5f5f5',
    dark: '#121212'
  },
  backgroundPaper: {
    light: '#ffffff',
    dark: '#1e1e1e'
  },
  textPrimary: {
    light: '#212121',
    dark: '#ffffff'
  },
  textSecondary: {
    light: '#757575',
    dark: 'rgba(255,255,255,0.7)'
  },
  errorMain: {
    light: '#d32f2f',
    dark: '#f44336'
  },
  infoMain: {
    light: '#0288d1',
    dark: '#29b6f6'
  },
  divider: {
    light: 'rgba(0,0,0,0.12)',
    dark: 'rgba(255,255,255,0.12)'
  }
}
