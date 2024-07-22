import Image from 'next/image';
import React,{CSSProperties} from 'react';
interface FeatureIconProps {
   style?: CSSProperties;
   src?: string
 }
 export const FeatureIcon: React.FC<FeatureIconProps> = ({ style,src }) => {
   return (
      // <Image src={"./Smart_Study_Guide_Platform.jpg"} alt='Smart_Study_Guide_Platform'></Image>
      <img src={src} style={{...style}}></img>
   );
};
