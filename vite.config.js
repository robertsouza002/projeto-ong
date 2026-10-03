import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        cadastro: 'cadastro.html',
        projetos: 'projetos.html'
      }
    }
  }
});