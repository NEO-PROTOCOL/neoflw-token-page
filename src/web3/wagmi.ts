import { http, createConfig } from 'wagmi';
import { base } from 'wagmi/chains';
import { coinbaseWallet, injected } from 'wagmi/connectors';

const rpcUrl = (import.meta.env.PUBLIC_BASE_RPC_URL ?? '').trim() || undefined;

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    coinbaseWallet({
      appName: 'NEØ FlowOFF',
      preference: 'all',
      version: '4',
    }),
    injected({ shimDisconnect: true }),
  ],
  transports: {
    [base.id]: http(rpcUrl),
  },
  ssr: false,
});

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}
