import { defineConfig } from 'astro/config';

// https://astro.build/config
import solidJs from "@astrojs/solid-js";
import yaml from '@rollup/plugin-yaml';
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    UnoCSS(),
  ],
  vite: {
    plugins: [yaml()]
  }
});