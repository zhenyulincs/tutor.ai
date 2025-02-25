import { Button, Divider, Link, Input, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../../styles/box';
import { Flex } from '../../styles/flex';
import Typewriter from 'typewriter-effect';
export const Hero = () => {
   return (

      <>
         <Flex
            css={{
               'gap': '$10',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center', 
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$18',
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
                     AICO turns your  {' '}
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
                              'Courses',
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
                        fontSize: '48px',
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
                  Curating a personalize learning experience for you, for any subject,
                  using AI.
                  
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >

                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     target="_blank"
                     href="ai_chat"
                  >
                     <Button>
                        Try AICO
                     </Button>
                  </Link>


               </Flex>

            </Box>
            <Box
               css={{
                  '& img': {
                     width: '750px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="sample.png" alt="sample image"/>
            </Box>
         </Flex>
         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$16' }}

         />
      </>
   );
};
