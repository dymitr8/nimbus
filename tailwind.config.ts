import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {},
    colors: {
      ...colors,
      swampy: '#397326',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      wide: '2500px',
    },
  },
  plugins: [],
}
