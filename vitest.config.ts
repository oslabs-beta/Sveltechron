import {defineConfig} from 'vitest/config'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({hot: !process.env.VITEST})],
  test: {
    /**
     * @author Jay Kura
     * includes will match __tests__ directory so that the nested tests can import tests from src/components/* folder w/o throwing an error
     */
    include: ['__tests__/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    // allow for vitest to be accessed globally without being imported in each file like Jest
    globals: true,
    //using the jsdom implementation because it's a js implementation of many web standards, creates a browser-like environment for testing
    environment: 'jsdom',
  },
})