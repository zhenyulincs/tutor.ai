import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';

export const Statistics = () => {
   return (
      <>
         <Box id = 'technologies'
            css={{
               pt: '$20',
               pb: '$16',
               px: '$6',
            }}
         >
            <Flex direction={'column'} align={'center'}>
               <Text
                  h3
                  css={{
                     textAlign: 'center',
                     fontSize: '$5xl'
                  }}
               >
                  Technologies used
               </Text>
               <Text
                  span
                  css={{
                     maxWidth: '1000px',
                     textAlign: 'center',
                  }}
               >
                  The model, frameworks and languages that Tutor.ai is built upon.
               </Text>
            </Flex>
            <Flex
               direction={'row'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  'gap': '4rem',
                  'pt': '$16',
                  '@sm': {
                     gap: '10rem',
                  },
               }}
            >
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     <img className="language" src="javascript.png" alt="javascript"></img>
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Language
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     <img className="framework-react" src="react.png" alt="react"></img>
                     <img className="framework-nextjs" src="nextjs.png" alt="nextjs"></img>
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Frameworks
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     <img className="model" src="mistral.png" alt="mistral"></img>
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Model
                  </Text>
               </Flex>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$16'}}
         />
      </>
   );
};
