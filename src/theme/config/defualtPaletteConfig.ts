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
  }
}
