import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../../icons/BoxIcon';
import {FeatureIcon} from '../../icons/FeatureIcon';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';

export const Features3 = () => {
   return (
      <>
         <Flex
            id='feature3'
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$9',

               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column" css={{ width: '50%' }}>
               <Text span css={{color: '$blue600'}}>
               </Text>
               <Text h3 css={{fontSize: '$4xl'}}>Al-Assisted Practice Generation</Text>

               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >

                  
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        AI Generated Practice

                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Practice with AI-generated tests and exercises that simulate real exam conditions, ensuring you&apos;re thoroughly prepared for any assessment.


                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Knowledge Gap Analysis

                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Identify and address your knowledge gaps with AI-driven analysis, helping you focus on areas that need the most attention for continuous improvement.

                     </Text>
                  </Flex>
               </Flex>
   

            </Flex>
            <Flex align={'center'} css={{ width: '50%' }}>
               <FeatureIcon src='./feature3WF.jpg' style={{width:'100%'}}/>
            </Flex>
         </Flex>
         <Divider

            css={{position: 'absolute', inset: '0p', left: '0', mt: '$1'}}

         />
      </>
   );
};