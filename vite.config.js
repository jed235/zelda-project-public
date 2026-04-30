import { defineConfig } from 'vite'
import glslify from 'rollup-plugin-glslify'
import * as path from 'path'

export default ({ mode }) => {
  return defineConfig({
    root: 'src',
    base: mode === 'development' ? '/' : './',
    build: {
      outDir: '../dist',
      sourcemap: mode === 'development',
      minify: mode === 'production' ? 'terser' : false,
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three'],
            gsap: ['gsap'],
          },
        },
      },
    },
    server: {
      host: true,
      port: 5173,
    },
    preview: {
      port: 4173,
      host: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@glsl': path.resolve(__dirname, './src/js/glsl'),
      },
    },
    plugins: [glslify()],
  })
}
