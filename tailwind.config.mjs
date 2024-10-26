// @ts-nocheck

import daisyui from 'daisyui'
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
import mobileHover from 'tailwind-mobile-hover'
import touch from 'tailwindcss-touch'

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: {
    extract,
    files: ['node_modules/rsc-daisyui/dist/**/*.js', 'src/**/*.{js,ts,jsx,tsx,mdx}'],
  },
  theme: {
    screens,
    fontSize,
    fontFamily: {
      alegreya: 'var(--font-alegreya)',
      pacifico: 'var(--font-pacifico)',
    },
  },
  daisyui: {
    themes: ['forest'],
  },
  plugins: [fluid, touch(), daisyui, mobileHover],
}

export default tailwindConfig
