import react from '@vitejs/plugin-react';
import { UserConfig, ConfigEnv } from 'vite';
import { join } from 'path';

const srcRoot = join(__dirname, 'src');

export default ({ command }: ConfigEnv): UserConfig => {
  // DEV
  if (command === 'serve') {
    return {
      root: srcRoot,
      base: '/',
      plugins: [react()],
      resolve: {
        alias: {
          '@atom': join(srcRoot, '/views/components/atoms'),
          '@module': join(srcRoot, '/views/components/modules'),
          '@template': join(srcRoot, '/views/components/templates'),
          '@asset': join(srcRoot, '/views/assets'),
          '@model': join(srcRoot, '/model'),
          '@store': join(srcRoot, '/stores')
        }
      },
      build: {
        outDir: join(srcRoot, '/out'),
        emptyOutDir: true,
        rollupOptions: {}
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT
      },
      optimizeDeps: {
        exclude: ['path']
      }
    };
  }
  // PROD
  return {
    root: srcRoot,
    base: `${__dirname}/src/out/`,
    plugins: [react()],
    resolve: {
      alias: {
        '@atom': join(srcRoot, '/views/components/atoms'),
        '@module': join(srcRoot, '/views/components/modules'),
        '@template': join(srcRoot, '/views/components/templates'),
        '@asset': join(srcRoot, '/views/assets'),
        '@model': join(srcRoot, '/model'),
        '@store': join(srcRoot, '/stores')
      }
    },
    build: {
      outDir: join(srcRoot, '/out'),
      emptyOutDir: true,
      rollupOptions: {}
    },
    server: {
      port: process.env.PORT === undefined ? 3000 : +process.env.PORT
    },
    optimizeDeps: {
      exclude: ['path']
    }
  };
};
