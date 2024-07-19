import { Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../../icons/BoxIcon';
import { FeatureIcon } from '../../icons/FeatureIcon';
import { Box } from '../../styles/box';
import { Flex } from '../../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            id='features'
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$9',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-between',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column" css={{ width: '60%' }}>
               <Text h3 css={{
                  fontSize: '$4xl'
               }}>
                  Smart Study Guide
               </Text>

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
                        Class Preparation
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Prepare for your classes with AI-driven study guides and resources tailored to your specific needs, ensuring you&apos;re always ready to excel.
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
                        Class Review
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Review and reinforce your learning with personalized content summaries and quizzes that help you retain key concepts and improve your understanding.

                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'end'} css={{ width: '40%' }}>
               <FeatureIcon src="./Smart_Study_Guide_Platform.jpg" style={{ width: '100%' }} />
            </Flex>
         </Flex>
         <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$2' }} />
      </>
   );
};