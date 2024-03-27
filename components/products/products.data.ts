import { ProductCardProps } from '../product-card/product-card.types';
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

export const PRODUCTS: ReadonlyArray<ProductCardProps> = [
  {
    id: 'suicoins',
    Icon: SuiCoinsSVG,
    name: 'Suicoins',
    description:
      'Effortless coin minting and distribution; swapping and management.',
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
    description: 'Capital-Efficient Collateral Debt Protocol.',
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
