import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../../icons/BoxIcon';
import {FeatureIcon} from '../../icons/FeatureIcon';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            id='start_of_feature'
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
            <Flex align={'center'} css={{ width: '50%' }}>
               <FeatureIcon src='./feature2WF.jpg' style={{width:'100%'}}/>
            </Flex>
            <Flex align={'end'} direction="column" css={{ width: '50%', alignItems: 'flex-end' }}>
               <Text span css={{color: '$blue600'}}>
               </Text>
               <Text h3 css={{fontSize: '$4xl',textAlign:'right'}}>AI-Driven Step by Step Problem Solving
               </Text>


               <Flex

                  css={{
                     py: '$10',
                     gap: '$5',
                     justifyContent:'flex-end'
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Exam Preparation

                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Use AI-powered Q&A to clarify doubts and deepen your understanding of exam topics, providing you with the confidence to tackle any question.


                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                     justifyContent:'flex-end'

                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Exam Review


                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >

                        Reflect on your exam performance with detailed AI-generated feedback, helping you identify strengths and areas for improvement.


                     </Text>
                  </Flex>
               </Flex>

            </Flex>


         </Flex>
         <Divider

            css={{position: 'absolute', inset: '0p', right: '0', mt: '$2'}}

         />
      </>
   );
};