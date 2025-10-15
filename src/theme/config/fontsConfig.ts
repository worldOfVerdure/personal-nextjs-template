export type FontConfig = {
  body: string;
  heading: string;
  mono?: string;
};

type ClientFontConfig = {
  body: string | undefined;
  heading: string | undefined;
  mono?: string | undefined;
}

const clientFonts: ClientFontConfig = {
  body: undefined,
  heading: undefined,
  // mono: undefined
  // body: [
  //   ' ',
  // ].join(','),
  // heading: [
  //   ' ',
  // ].join(','),
  // mono: [
  //   ' ',
  // ].join(',')
}

const defaultFonts: FontConfig = {
  body: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  heading: [
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(','),
  // mono: [
  //   'Menlo',
  //   'Monaco',
  //   '"Courier New"',
  //   'Courier',
  //   'monospace',
  // ].join(','),
};

const buildFontStack = (
  primary: string | undefined,
  fallback: string
): string => {
  const primaryFonts = primary?.split(',').map(f => f.trim()) ?? [];
  const fallbackFonts = fallback.split(',').map(f => f.trim());

  const seen = new Set<string>();
  const combined = [...primaryFonts, ...fallbackFonts].filter(font => {
    const normalized = font.toLowerCase();
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });

  return combined.join(', ');
};

export const resolvedFonts: FontConfig = {
  body: buildFontStack(clientFonts.body, defaultFonts.body),
  heading: buildFontStack(clientFonts.heading, defaultFonts.heading),
  // mono: buildFontStack(clientFonts.mono, defaultFonts.mono),
};
