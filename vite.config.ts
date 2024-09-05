import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@mocks': path.resolve(__dirname, 'src/assets/mocks'),
      '@utils': path.resolve(__dirname, 'src/assets/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@atoms': path.resolve(__dirname, 'src/atomic-component/atom'),
      '@molecules': path.resolve(__dirname, 'src/atomic-component/molecule'),
      '@organisms': path.resolve(__dirname, 'src/atomic-component/organism'),
      '@pages': path.resolve(__dirname, 'src/atomic-component/page'),
    }
  },
  plugins: [react()],
})
