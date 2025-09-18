import { type Mode } from '../base/palette.ts'

export const resolveColors = (
  clientValue: string | undefined,
  authorValue: string | undefined,
  defaultValue: string,
  mode: Mode
): { color: string; source: 'client' | 'author' | 'default', mode: Mode } => {
  if (clientValue) return { color: clientValue, source: 'client', mode };
  if (authorValue) return { color: authorValue, source: 'author', mode };
  return { color: defaultValue, source: 'default', mode };
}
