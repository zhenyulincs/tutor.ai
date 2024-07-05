import { Button, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../../icons/BoxIcon';
import { FeatureIcon } from '../../icons/FeatureIcon';
import { Flex } from '../../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$10',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',

               '@sm': {
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            <Flex direction="column" align={'center'}>
               <Text span css={{ color: '$blue600' }}>
                  Feature 2
               </Text>
               <Text h3>Asking AI Questions Related to Course Subject</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Tutor.ai is able to go beneath the surface level of the user&apos;s course,
                  and provide subject-specific support and resources based on the user&apos;s prompt.
               </Text>

               <Flex
                  justify={'center'}
                  wrap={'wrap'}
                  css={{
                     py: '$10',
                  }}
               >
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$6',
                     }}
                  >
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Topic-specific Preparation
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Our model allows students to query about upcoming topics for the purpose of preparation
                           and provide personalized study plans based on the course subject for any upcoming homework, quiz, or test.
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
                           Topic-specific Review
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '330px',
                              color: '$accents8',
                           }}
                        >
                           Our model allows the end-user to query for the explanation of difficult course-related subjects,
                           clarification on incorrect answers, and strategies to improve performance based on previous assessments.
                        </Text>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>

         <Divider
            css={{
               position: 'absolute',
               inset: '1p',
               left: '0',
               mt: '$2', 
            }}
         />
      </>
   );
};