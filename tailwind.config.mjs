// @ts-nocheck

import daisyui from 'daisyui'
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
import mobileHover from 'tailwind-mobile-hover'
import touch from 'tailwindcss-touch'

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: {
    extract,
    files: [
      'node_modules/daisyui/dist/**/*.js',
      'node_modules/react-daisyui/dist/**/*.js',
      './src/(app|components|shared)/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  theme: {
    screens,
    fontSize,
  },
  daisyui: {
    themes: ['aqua'],
  },
  plugins: [fluid, touch(), mobileHover, daisyui],
}

export default tailwindConfig
