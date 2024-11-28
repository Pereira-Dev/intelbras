import { FC } from 'react';
import Image from 'next/image';

import DefenseLogoSVG from '../../../assets/logos/defense-mc.svg';
import IALogoSVG from '../../../assets/logos/ia.svg';
import { DefenseLogoProps } from './types';


export const DefenseLogo: FC<DefenseLogoProps> = (props) => {
  const { className, size } = props;

  if (size === 'small')
    return <Image className={className} src={IALogoSVG} alt="IA" />;

  if (size === 'large')
    return (
      <Image className={className} src={DefenseLogoSVG} alt="Defense IA" />
    );

  return (
    <Image
      className={className}
      src={DefenseLogoSVG}
      alt="Defense IA"
      height={54}
    />
  );
};
