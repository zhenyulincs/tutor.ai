import {Button, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../../styles/flex';

export const Technologies = () => {
   return (
      <>
         <Flex
            id='technologies'
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$32',
               'px': '$6',
               'py': '$10',
               '@md': {
                  px: '$64',
               },
               'pb': '$10'
            }}
         >
            <Text h1 css={{textAlign: 'center', fontSize: '$4xl'}}>
               Backend Technologies
            </Text>
            <Flex align={'center'} justify={'center'} css={{width: '100%', 'pt': '$10'}}>
               <img src='technologies.png' width="80%" />
            </Flex>
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
