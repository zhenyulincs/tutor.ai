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
                  Feature 3
               </Text>
               <Text h3>Using AI to Prepare for Assessments</Text>
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
                        Our model can generate preparational content based on subject and topic
                        the end user is being assessed on, such as a mock exam.  

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
                        Our model analyzes the strengths and weaknesses in the student user&apos;s knowledge on specific topics
                        in tandem to the assessment material, helping the student user fill in any of their knowledge gaps.
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