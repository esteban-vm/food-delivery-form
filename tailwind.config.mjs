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
      './node_modules/daisy-ui-react-components/**/*.{js,ts,jsx,tsx}',
      './src/(app|components|shared)/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  theme: {
    screens,
    fontSize,
  },
  plugins: [fluid, touch(), mobileHover, daisyui],
}

export default tailwindConfig
