import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../../icons/BoxIcon';
import {FeatureIcon} from '../../icons/FeatureIcon';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';

export const Features1 = () => {
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
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
                  Feature 1
               </Text>
               <Text h3>Smart Study Guide</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Our Smart Study Guide leverages advanced AI to provide personalized learning paths tailored 
                  to each student's unique needs. This feature analyzes your strengths and weaknesses, offering 
                  targeted content and resources to help you master your coursework efficiently.


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
                        Course Preparation
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Our model can create a personalized prerequisite roadmap prior to 
                        the student user&apos;s class, recommending inuitive, high quality prepatory study resources.
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
                        Course Review
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >

                        Our model is able to summarize course topics and material, 
                        providing the adequate recommended resources for the student to review on
                        prior and during enrollment in the class.
                     </Text>
                  </Flex>
               </Flex>

            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Divider

            css={{position: 'absolute', inset: '0p', left: '0', mt: '$2'}}

         />
      </>
   );
};
