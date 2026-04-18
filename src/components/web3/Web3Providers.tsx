import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { base } from 'wagmi/chains';
import type { ReactNode } from 'react';
import { wagmiConfig } from '../../web3/wagmi';

import '@coinbase/onchainkit/styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const apiKey = (import.meta.env.PUBLIC_ONCHAINKIT_API_KEY ?? '').trim() || undefined;

const paymasterUrl =
  (import.meta.env.PUBLIC_CDP_PAYMASTER_URL ?? '').trim() ||
  (apiKey ? `https://api.developer.coinbase.com/rpc/v1/base/${apiKey}` : undefined);

export default function Web3Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={apiKey}
          chain={base}
          config={{
            appearance: {
              name: 'NEØ FlowOFF',
              mode: 'dark',
              theme: 'cyberpunk',
            },
            paymaster: paymasterUrl,
            wallet: {
              display: 'modal',
            },
          }}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
