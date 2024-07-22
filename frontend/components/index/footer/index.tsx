import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';
import Link from 'next/link';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Flex
               justify={'end'}
               wrap={'wrap'}
               align={'end'}
               css={{
                  'gap': '$10',
                  '&  ul': {
                     margin: 0,
                  },
                  '@sm': {},
               }}
            >

            </Flex>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'right',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                     'text-align': 'center'

                  }}
               >
                  <Text h5 style={{textAlign: 'center'}}>Copyright © <Link href='#' style={{color: '#0854bc'}}>Mobile and Computing Laboratory</Link> 2024 | Powered by <Link href='#' style={{color:'#0854bc'}}>Vercel</Link></Text>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
