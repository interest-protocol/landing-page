import {
  AirdropSVG,
  BookSVG,
  CogSVG,
  CoinSVG,
  DAOSVG,
  DifferenceSVG,
  IPXMovementSVG,
  PlusSVG,
  RocketSVG,
  SnowSVG,
  StableSVG,
  SuiCoinsSVG,
  SuiTearsSVG,
  SwapSVG,
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
    link: 'https://interest.xyz',
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
    id: 'memez',
    Icon: '/img/memez-head',
    name: 'Memez.GG',
    description:
      'Welcome to the land of coins endless possibilities—your one-stop shop to explore, trade, discover, create and edit coins.',
    link: 'https://coins.memez.gg/',
    image: '/img/coins-memez',
    network: 'SUI',
    tags: [
      {
        title: 'Create Coin',
        Icon: PlusSVG,
      },
      {
        title: 'Launchpad',
        Icon: RocketSVG,
      },
      {
        title: 'Swap',
        Icon: DifferenceSVG,
      },
    ],
  },
  {
    id: 'walrus',
    Icon: SnowSVG,
    name: 'WINTER WALRUS',
    description: 'LST protocol securing the Walrus Network.',
    link: 'https://www.winterwalrus.com/',
    image: '/img/winter-walrus',
    network: 'SUI',
    tags: [
      {
        title: 'LST',
        Icon: StableSVG,
      },
      {
        title: 'Stake',
        Icon: CogSVG,
      },
      {
        title: 'Walrus',
        Icon: SnowSVG,
      },
    ],
  },
];
