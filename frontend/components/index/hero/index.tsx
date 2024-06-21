import { Button, Divider, Input, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../../icons/CheckIcon';
import { Box } from '../../styles/box';
import { Flex } from '../../styles/flex';
import Typewriter from 'typewriter-effect';
import styles from './hero.module.css';
export const Hero = () => {
   return (
      
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Chat and learn: {' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Tutor.ai turns your  {' '}
                  </Text>
                  
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     <Typewriter
                        options={{
                           strings: [
                              'Course', 
                              'Homework',
                              "Quizzes"
                           ],
                           autoStart: true,
                           loop: true,
                           skipAddStyles: true
                        }}
                        
                     />
                     {' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     <br /> into conversations. {' '}
                  </Text>


               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  The easiest way to build React Landing page in seconds. Save
                  time and focus on your project.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Button>Get Started</Button>
               </Flex>

            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="mock.png" />
            </Box>
         </Flex>
         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }}
         />
      </>
   );
};
