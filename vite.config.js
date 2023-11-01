import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader' ////svg

const __filename = fileURLToPath(import.meta.url);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {   //указывать пользовательские компоненты при наличии шага сборки
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'btn'
        }
      }
    }
    ),
    svgLoader({  ////svg
      svgoConfig: {

        //
      }

    }) 
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',       //compile vue component from emiting
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/components/icons', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@classes': fileURLToPath(new URL('./src/classes', import.meta.url))
    }
  }
})
