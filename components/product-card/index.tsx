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
  id,
  name,
  Icon,
  tags,
  link,
  image,
  network,
  description,
}) => {
  const gotoProduct = () => window.open(link, '_blank', 'noreferrer');

  return (
    <>
      <Motion
        id={id}
        gap={['xl', '3xl']}
        borderRadius="m"
        border="1px solid"
        whileHover="hover"
        position="relative"
        py={['m', 'm', '4xl']}
        px={['m', 'm', '2xl']}
        flexDirection="column"
        borderColor="outlineVariant"
        gridTemplateColumns="1fr 1fr"
        display={['flex', 'flex', 'grid']}
        nHover={{ borderColor: 'outline', boxShadow: '0 0 0.5rem #fff4' }}
      >
        <Box
          top="0"
          width="4rem"
          height="7rem"
          position="absolute"
          right={['1rem', '1rem', '5rem']}
        >
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
          borderRadius="s"
          variants={cardVariants}
          minHeight={['12rem', '15rem', '23rem']}
          backgroundImage={`url('${image}.webp')`}
          backgroundPosition="0% 50%"
          backgroundRepeat="no-repeat"
          backgroundSize="100%"
        />
        <Box
          gap="xl"
          display="flex"
          flexDirection="column"
          py={['unset', 'unset', '2xl']}
          px={['unset', 'unset', '4xl']}
          alignItems={['unset', 'unset', 'flex-start']}
        >
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
          <Button
            bg="white"
            fontSize="l"
            variant="tonal"
            flexWrap="nowrap"
            whiteSpace="nowrap"
            fontFamily="Satoshi"
            onClick={gotoProduct}
            justifyContent="center"
            width={['unset', 'unset', 'auto']}
            SuffixIcon={
              <AnchorArrow maxWidth="0.8rem" maxHeight="0.8rem" width="100%" />
            }
          >
            Go to {name}
          </Button>
        </Box>
      </Motion>
    </>
  );
};

export default ProductCard;
