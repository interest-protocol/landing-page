import {
  AirdropSVG,
  BookSVG,
  CogSVG,
  CoinSVG,
  DAOSVG,
  IPXMovementSVG,
  PlusSVG,
  StableSVG,
  SuiCoinsSVG,
  SuiTearsSVG,
  SuProtocolSVG,
  SwapSVG,
  VolatileSVG,
} from '../svg';
import { ProductCardProps } from './product-card/product-card.types';

export const PRODUCTS: ReadonlyArray<Omit<ProductCardProps, 'index'>> = [
  {
    id: 'suicoins',
    Icon: SuiCoinsSVG,
    name: 'Suicoins',
    description:
      'Effortless coin minting and distribution; swapping and liquidity management.',
    link: 'https://suicoins.com',
    image: '/img/sui-coins',
    network: 'SUI',
    tags: [
      {
        title: 'DEX',
        Icon: SwapSVG,
      },
      {
        title: 'Airdrop',
        Icon: AirdropSVG,
      },
      {
        title: 'Create Coins',
        Icon: PlusSVG,
      },
    ],
  },
  {
    id: 'movement',
    Icon: IPXMovementSVG,
    name: 'Interest DEX',
    description:
      'Explore all the tooling available on SuiCoins, but in a different blockchain.',
    link: 'https://movement.interestprotocol.com',
    image: '/img/movement',
    network: 'M2',
    tags: [
      {
        title: 'DEX',
        Icon: SwapSVG,
      },
      {
        title: 'Airdrop',
        Icon: AirdropSVG,
      },
      {
        title: 'Create Coins',
        Icon: PlusSVG,
      },
    ],
  },
  {
    id: 'suitears',
    Icon: SuiTearsSVG,
    name: 'Suitears',
    description: 'Ready-to-use suite of smart contracts. Learn from the best.',
    link: 'https://suitears.com',
    image: '/img/suitears',
    network: 'SUI',
    tags: [
      {
        title: 'DAO',
        Icon: DAOSVG,
      },
      {
        title: 'Math Library',
        Icon: BookSVG,
      },
      {
        title: 'Capabilities',
        Icon: CogSVG,
      },
      {
        title: 'Utilities',
        Icon: CoinSVG,
      },
    ],
  },
  {
    id: 'suprotocol',
    Icon: SuProtocolSVG,
    name: 'Su Protocol',
    description: 'Decentralized money protocol.',
    link: 'https://su-interface.vercel.app/',
    image: '/img/su-protocol',
    network: 'SUI',
    tags: [
      {
        title: 'Leverage Sui',
        Icon: VolatileSVG,
      },
      {
        title: 'Stable Coin',
        Icon: StableSVG,
      },
    ],
  },
];
