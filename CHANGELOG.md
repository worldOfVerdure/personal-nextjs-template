# Changelog

All notable changes to this project will be documented here.

## [1.1.0] - 2025-09-24
### Added
- Emotion cache for MUI override safety
- `errorMain`, `infoMain`, and `divider` palette tokens
- Open Graph image and manifest for preview polish
- Favicons and fonts folder in `/public`

### Changed
- Migrated from `head.tsx` to `metadata.ts`
- Adopted `layout.tsx` / `ClientLayout.tsx` structure
- Moved `viewport` to `layout.tsx`
- Renamed `temp.tsx` → `Test.tsx` and updated import
- Updated `PaletteTokenKey` to reflect new tokens

## [1.0.1] - 2025-09-19
### Fixed
- ESLint warnings in Emotion components
- Theme typing cleanup for palette safety
