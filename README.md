# CMS Ready Template

The purpose of this template is for me to quickly clone version of this template that is configured
to my tech stack and settings. In addition, certain optimizations and features are included.

## Utilized tools

- Favicon
- https://ilovefavicon.com/

## See

[CHANGELOG.md](./CHANGELOG.md) for version history.

## TODO

~~-font.ts has config files that should be in the config folder~~
~~- createPalette() doesn't handle additional palette options: infoMain, errorMain and divider
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
    background: {
      default: resolveToken('backgroundDefault'),
      paper: resolveToken('backgroundPaper'),
    },
    text: {
      primary: resolveToken('textPrimary'),
      secondary: resolveToken('textSecondary'),
    },
  };
};~~
~~-Add "dom" tp tsconfig lib~~
~~-Add "declaration": true, to tsconfig.base.json~~
~~- Add additional palette options to the createPalette function~~
~~- Add cardTitle, cardPrice, cardDescription navItemCard to typography as well as update type.d.ts
  file ~~
