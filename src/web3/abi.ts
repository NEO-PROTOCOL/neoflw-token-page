import type { Address } from 'viem';

export const NEOFLW_ADDRESS = ((import.meta.env.PUBLIC_CONTRACT_ADDRESS ?? '').trim() ||
  '0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B') as Address;

export const NEOFLW_ABI = [
  {
    type: 'function',
    name: 'getContractInfo',
    stateMutability: 'view',
    inputs: [],
    outputs: [
      { name: 'currentSupply', type: 'uint256' },
      { name: 'maxSupply', type: 'uint256' },
      { name: 'mintPrice', type: 'uint256' },
      { name: 'mintAmount', type: 'uint256' },
      { name: 'mintEnabled', type: 'bool' },
      { name: 'bridge', type: 'address' },
    ],
  },
  {
    type: 'function',
    name: 'publicMint',
    stateMutability: 'payable',
    inputs: [],
    outputs: [],
  },
  {
    type: 'function',
    name: 'hasPublicMinted',
    stateMutability: 'view',
    inputs: [{ name: '', type: 'address' }],
    outputs: [{ type: 'bool' }],
  },
] as const;

export const BASE_CHAIN_ID = 8453;
export const BASESCAN_URL =
  (import.meta.env.PUBLIC_BASESCAN_URL ?? '').trim() || 'https://basescan.org';
