import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { inspectorServer } from 'react-dev-inspector/plugins/vite'

const rootDir = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window',
    'process.env': {}
  },
  plugins: [react(), inspectorServer()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(rootDir, 'src/')
      },
      {
        find: '@components',
        replacement: path.resolve(rootDir, 'src/components')
      },
      {
        find: '@near',
        replacement: path.resolve(rootDir, 'src/near')
      },
      {
        find: '@store',
        replacement: path.resolve(rootDir, 'src/store')
      }
    ]
  }
})
