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
            }}
         >
            <Text h1 css={{textAlign: 'center',
                           fontSize: '$5xl'
            }}>
               Your potential: Unlocked.

            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$3xl'}
            >
               Tutor.ai accomodates your academic journey, 
               allowing you to better personalize your own learning experience, 
               furthing your success in any subject of your choice.
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
                  },
               }}
            >
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                     
                     <Text weight={'semibold'} span size={'$3xl'} css={{color: '$blue600'}}>
                        <a href='#start_of_feature'>
                           Features
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
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     
                     <Text weight={'semibold'} span size={'$3xl'} css={{color: '$blue600'}}>
                        <a href='#faq'>
                           FAQ
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
