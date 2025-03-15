import {
  Box,
  Button,
  Motion,
  Tag,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import { MovementSVG, SuiSVG, TicketSVG } from '../../svg';
import AnchorArrow from '../../svg/anchor-arrow';
import { ProductCardProps } from './product-card.types';

const cardVariants = {
  offscreenOdd: {
    x: '20vw',
  },
  offscreenEven: {
    x: '-20vw',
  },
  onscreen: {
    x: '0vw',
    transition: {
      bounce: 0.2,
      duration: 1,
      type: 'spring',
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
  index,
  network,
  description,
}) => {
  const gotoProduct = () => window.open(link, '_blank', 'noreferrer');

  return (
    <Box id={id}>
      <Motion
        borderRadius="m"
        border="1px solid"
        position="relative"
        gap={['xl', '3xl']}
        flexDirection="column"
        whileInView="onscreen"
        variants={cardVariants}
        viewport={{ once: true }}
        py={['m', 'm', 'm', '4xl']}
        px={['m', 'm', 'm', '2xl']}
        borderColor="outlineVariant"
        gridTemplateColumns="1fr 1fr"
        display={['flex', 'flex', 'flex', 'grid']}
        initial={index & 1 ? 'offscreenOdd' : 'offscreenEven'}
        nHover={{ borderColor: 'outline', boxShadow: '0 0 0.5rem #fff4' }}
      >
        <Box
          top="0"
          width="4rem"
          height="7rem"
          position="absolute"
          right={['1rem', '1rem', '1rem', '5rem']}
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
          whileHover={{ scale: 0.99 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
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
          py={['unset', 'unset', 'unset', '2xl']}
          px={['unset', 'unset', 'unset', '4xl']}
          alignItems={['unset', 'unset', 'unset', 'flex-start']}
        >
          {typeof Icon == 'string' ? (
            <Box bg="#fff" width="3.5rem" height="3.5rem" borderRadius="100%">
              <img src={`${Icon}.webp`} alt={id} width="56px" height="56px" />
            </Box>
          ) : (
            <Icon maxWidth="3.5rem" maxHeight="3.5rem" height="100%" />
          )}
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
            nHover={{ color: 'onSurface' }}
            width={['unset', 'unset', 'unset', 'auto']}
            SuffixIcon={
              <AnchorArrow maxWidth="0.8rem" maxHeight="0.8rem" width="100%" />
            }
          >
            Go to {name}
          </Button>
        </Box>
      </Motion>
    </Box>
  );
};

export default ProductCard;
