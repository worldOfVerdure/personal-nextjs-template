// Tell TS we’re extending MUI’s breakpoint keys
import { type CSSProperties } from '@mui/material/styles/createTypography';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  // ✅ Extend Breakpoints
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;   // your custom
    xxxl: true;  // your custom
  }
  // ✅ Extend Typography variants inside the theme
  interface TypographyVariants {
    navItem: CSSProperties;
    navTitle: CSSProperties;
    btnContained: CSSProperties;
    btnOutline: CSSProperties;
  }

  interface TypographyVariantsOptions {
    navItem?: CSSProperties;
    navTitle?: CSSProperties;
    btnContained?: CSSProperties;
    btnOutline?: CSSProperties;
  }
}

// ✅ Allow usage of `variant="navItem"` in <Typography>
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navItem: true;
    navTitle: true;
    btnContained: true;
    btnOutline: true;
  }
}
