import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Atlas Finance',
  description:
    'Atlas is a cross-chain DEX built on the Solana blockchain',
    image: '%PUBLIC_URL%/logo192.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home',
  }
}
