# Changelog

All notable changes to this project will be documented here.

## [1.1.0] - 2025-10-24

⬆️ Upgraded Next.js from 15.5.2 to ^16.0.0, bringing in the latest performance and framework improvements

🧹 Updated eslint-config-next to ^16.0.0 to align with the new Next.js version

🧠 Downgraded @types/react and @types/react-dom to ^18.2.0 to match the current React 18.3.1 runtime and avoid type mismatches

## [1.0.1] - 2025-10-24

Emotion JSX Integration:

✅ Enabled Emotion's automatic JSX runtime by adding jsxImportSource: "@emotion/react" to tsconfig.base.json

✅ Removed legacy /** @jsxImportSource @emotion/react */ comment in favor of global config

## [1.0.0] - 2025-10-16

First release.
