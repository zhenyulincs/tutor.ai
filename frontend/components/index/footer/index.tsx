import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';
import Link from 'next/link';

export const Footer = () => {
   return (
      
      <Flex
         css={{
            py: '$10',
            px: '$6',
         }}
      >
         
         <Box as={'footer'} css={{width: '100%'}}>
         <Text h5 style={{textAlign: 'center'}}>Copyright © <Link href='http://sfsu-miclab.org/' style={{color: '#0854bc'}}>Mobile and Computing Laboratory</Link> 2024 | Powered by <Link href='https://vercel.com/' style={{color:'#0854bc'}}>Vercel</Link></Text>
            
         </Box>
      </Flex>
   );
};
