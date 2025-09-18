type ManualPaletteType = {
  light: string | undefined,
  dark: string | undefined
}

export interface ManualPaletteConfig {
  primaryMain?: ManualPaletteType;
  secondaryMain?: ManualPaletteType;
  backgroundDefault?: ManualPaletteType;
  backgroundPaper?: ManualPaletteType;
  textPrimary?: ManualPaletteType;
  textSecondary?: ManualPaletteType;
}
//Palette for client chooses colors
export const clientPalette: ManualPaletteConfig = {
  primaryMain: {
    light: undefined,
    dark: undefined,
  },
  secondaryMain: {
    light: undefined,
    dark: undefined,
  },
  backgroundDefault: {
    light: undefined,
    dark: undefined,
  },
  backgroundPaper: {
    light: undefined,
    dark: undefined,
  },
  textPrimary: {
    light: undefined,
    dark: undefined,
  },
  textSecondary: {
    light: undefined,
    dark: undefined,
  },
}
//Palette where I choose colors
export const authorPalette: ManualPaletteConfig = {
  primaryMain: {
    light: undefined,
    dark: undefined,
  },
  secondaryMain: {
    light: undefined,
    dark: undefined,
  },
  backgroundDefault: {
    light: undefined,
    dark: undefined,
  },
  backgroundPaper: {
    light: undefined,
    dark: undefined,
  },
  textPrimary: {
    light: undefined,
    dark: undefined,
  },
  textSecondary: {
    light: undefined,
    dark: undefined,
  },
};
