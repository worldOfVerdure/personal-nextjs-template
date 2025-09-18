import { getTheme } from '../base/base.ts';
import type { Theme } from '@mui/material/styles';
import { useMemo, useRef } from 'react';

export function useCachedTheme(mode: 'light' | 'dark'): Theme {
  const themeCache = useRef<Partial<Record<'light' | 'dark', Theme>>>({});

  return useMemo(() => {
    if (!themeCache.current[mode]) {
      themeCache.current[mode] = getTheme(mode);
    }
    return themeCache.current[mode];
  }, [mode]);
}
