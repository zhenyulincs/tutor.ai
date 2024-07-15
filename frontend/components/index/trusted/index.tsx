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
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
               'pb': '$11'

            }}
         >
            <Text h1 css={{textAlign: 'center',
                           fontSize: '$6xl'
            }}>
               Empowering students to excel academically through personalized AI-driven support.


            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  'pt': '$8'
               }}
               weight="normal"
               size={'$2xl'}
            >
               Tutor.AI revolutionizes learning with features like the Smart Study Guide,
               AI-Powered Q&A, and Assessment Prep Pro. Our platform adapts to each student&apos;s needs, 
               offering targeted resources, instant answers, and effective exam preparation, 
               making academic success accessible and efficient.

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
                     
                     <Text weight={'semibold'} span size={'$3xl'} css={{color: '$blue600'}}>
                        <a href='#start_of_feature'>
                           Our Features
                        </a> 
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     
                     <Text weight={'semibold'} span size={'$3xl'} css={{color: '$blue600'}}>
                        <a href='#technologies'>
                           Technologies
                        </a>
                     </Text>
                  </Flex>
               </Grid>
            </Grid.Container>
         </Flex>

         <Divider

            css={{position: 'absolute', inset: '0p', left: '0', mt: '$2'}}

         />
      </>
   );
};
