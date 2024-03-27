import {
  Box,
  Button,
  Motion,
  Tag,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import { MovementSVG, SuiSVG, TicketSVG } from '../svg';
import AnchorArrow from '../svg/anchor-arrow';
import { ProductCardProps } from './product-card.types';

const cardVariants = {
  hover: {
    backgroundSize: ['100%', '300%', '100%'],
    backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%'],
    transition: {
      duration: 30,
      repeat: Infinity,
    },
  },
};

const ProductCard: FC<ProductCardProps> = ({
  name,
  Icon,
  tags,
  link,
  image,
  network,
  description,
}) => (
  <>
    <Motion
      py="4xl"
      px="2xl"
      gap="3xl"
      display="grid"
      borderRadius="m"
      border="1px solid"
      whileHover="hover"
      position="relative"
      borderColor="outlineVariant"
      gridTemplateColumns="1fr 1fr"
      nHover={{ borderColor: 'outline', boxShadow: '0 0 0.5rem #fff4' }}
    >
      <Box right="5rem" width="4rem" height="7rem" position="absolute">
        <Box position="absolute">
          <TicketSVG maxWidth="7rem" maxHeight="7rem" width="100%" />
        </Box>
        <Box
          pb="3xl"
          gap="xs"
          height="100%"
          display="flex"
          position="relative"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="body" size="small" color="container">
            network
          </Typography>
          {network === 'SUI' ? (
            <SuiSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
          ) : (
            <MovementSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
          )}
        </Box>
      </Box>
      <Motion
        minHeight="23rem"
        borderRadius="s"
        variants={cardVariants}
        backgroundImage={`url('${image}.webp')`}
        backgroundPosition="0% 50%"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
      />
      <Box px="4xl" py="2xl" display="flex" flexDirection="column" gap="xl">
        <Icon maxWidth="3.5rem" maxHeight="3.5rem" height="100%" />
        <Typography variant="display" size="medium" color="onSurface">
          {name}
        </Typography>
        <Typography
          size="large"
          variant="body"
          maxWidth="20rem"
          color="onSurface"
        >
          {description}
        </Typography>
        <Box display="flex" flexWrap="wrap" gap="2xs" maxWidth="20rem">
          {tags.map(({ title, Icon }) => (
            <Tag
              px="s"
              py="xs"
              key={unikey()}
              variant="outline"
              PrefixIcon={
                <Icon maxWidth="1rem" maxHeight="1rem" width="100%" />
              }
            >
              {title}
            </Tag>
          ))}
        </Box>
        <a href={link} target="_blank" rel="noreferrer">
          <Button
            bg="white"
            fontSize="l"
            variant="tonal"
            flexWrap="nowrap"
            whiteSpace="nowrap"
            fontFamily="Satoshi"
            SuffixIcon={
              <AnchorArrow maxWidth="0.8rem" maxHeight="0.8rem" width="100%" />
            }
          >
            Go to {name}
          </Button>
        </a>
      </Box>
    </Motion>
  </>
);

export default ProductCard;
