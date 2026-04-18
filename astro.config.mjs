import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  build: {
    format: 'file',
  },
  integrations: [
    react({
      include: ['**/components/web3/**', '**/web3/**'],
    }),
  ],
  vite: {
    optimizeDeps: {
      include: [
        '@coinbase/onchainkit',
        '@coinbase/onchainkit/wallet',
        '@coinbase/onchainkit/identity',
        '@coinbase/onchainkit/transaction',
        'wagmi',
        'viem',
        '@tanstack/react-query',
        'eventemitter3',
      ],
    },
    ssr: {
      noExternal: ['@coinbase/onchainkit'],
    },
  },
});
