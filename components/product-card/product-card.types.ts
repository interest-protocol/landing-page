import { FC } from 'react';

import { SVGProps } from '../svg/svg.types';

interface Tag {
  title: string;
  Icon: FC<SVGProps>;
}

export interface ProductCardProps {
  id: string;
  link: string;
  name: string;
  image: string;
  Icon: FC<SVGProps>;
  description: string;
  network: 'SUI' | 'M2';
  tags: ReadonlyArray<Tag>;
}
