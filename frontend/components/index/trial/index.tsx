import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../../styles/flex';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Try Tutor.ai today</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
               Start personalizing your learning experience now.
            </Text>

            <Button>
               <a href="ai_chat">
                  Try Tutor.ai
               </a>
            </Button>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
