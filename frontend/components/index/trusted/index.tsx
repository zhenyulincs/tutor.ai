import {Button, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../../styles/flex';

export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$32',
               'px': '$6',
               'py': '$20',
               '@md': {
                  px: '$64',
               },
               'pb': '$10'

            }}
         >
            <Text h1 css={{textAlign: 'center',
                           fontSize: '$4xl'
            }}>
               Empowering students to excel academically
               <br></br> 
               through personalized AI-driven support.



            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '1400px',
                  textAlign: 'center',
                  'pt': '$10'
               }}
               weight="normal"
               size={'$2xl'}
            >
               Tutor.AI transforms personalized learning through AI-Powered Class Preview and Review, along with AI-Driven Step-by-Step Problem Solving. Our platform adapts to individual student needs, delivering instant analysis and explanations for errors, and offering precise guidance through each problem-solving step, enhancing academic achievement with accessibility and efficiency

            </Text>
            <Grid.Container
               gap={6}
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
                  '@sm': {
                     width: '100%',
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                  }
                  
               }}
            >
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
               
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     
                  </Flex>
               </Grid>

            </Grid.Container>
         </Flex>

         <Divider

            css={{position: 'absolute', inset: '0p', left: '0', mt: '$0'}}

         />
      </>
   );
};
