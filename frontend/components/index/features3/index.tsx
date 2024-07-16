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
               </Text>
               <Text h3 css={{fontSize: '$4xl'}}>Using AI to Prepare for Assessments</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >

                  Tutor.ai provides both assessment preparation and review resources,
                  helping the student user refresh or strengthen their knowledge in their class topics.
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
                        Assessment Preparation
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Our model generates tailored preparational content based on the subject and topic of the upcoming assessment. 
                        This includes creating mock exams and practice questions to help students thoroughly prepare for their tests.

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
                        Assessment Review
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Our model analyzes the student&apos;s performance to identify strengths and weaknesses in their knowledge of specific topics. 
                        It provides targeted resources and feedback to help fill any knowledge gaps and reinforce understanding.
                     </Text>
                  </Flex>
               </Flex>
   

            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Divider

            css={{position: 'absolute', inset: '0p', left: '0', mt: '$1'}}

         />
      </>
   );
};