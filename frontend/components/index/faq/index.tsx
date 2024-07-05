import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../../icons/BoxIcon';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>You Have Questions?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >

                  Commonly asked questions about Tutor.ai&apos;s functionality, user-end experience, and subject comprehension.
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>

                        How does Tutor.ai work?

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >

                        Tutor.ai is a virtual assistant powered by artificial intelligence designed to help students with their studies. 
                        It can answer questions, explain concepts, provide resources, and offer practice problems.

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Tutor.ai can engage in natural language conversations, understand context, and provide accurate and relevant responses to a wide range of academic inquiries. 

                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What devices can I use to access Tutor.ai?

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Tutor.ai is designed for both flexibility and accessibility, making it available on various devices. 
                        You can access it on smartphones (both Android and iOS), tablets, laptops, and desktop computers.

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        This cross-platform compatibility ensures that you can get help whenever and wherever you need it, whether you&apos;re at home, in a library, or commuting.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>

                        Is Tutor.ai available 24/7?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Yes, Tutor.ai is available 24/7. 
                        This round-the-clock availability is one of its most significant advantages, 
                        as it allows you to receive help at any time, regardless of your schedule or time zone.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Whether you&apos;re studying late at night, early in the morning, or during a weekend, the AI chatbot tutor is always ready to assist. 
                        This ensures that learning and academic support are continuous and not restricted by traditional tutoring hours.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What subjects does Tutor.ai help with?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Tutor.ai is equipped and readily available to assist with a wide array of subjects, 
                        catering to all sorts of various academic levels and interests no matter the user comprehension, with accuracy.
                     </Text>
                           Common subjects include:
                        <ul>
                           <li>Mathematics</li>
                           <li>Sciences</li>
                           <li>Languages</li>
                           <li>History and Social Sciences</li>
                           <li>Literature</li>
                           <li>Computer Science</li>
                        </ul>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Can Tutor.ai explain complex concepts?

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Tutor.ai is specifically designed to explain complex concepts in a clear and understandable manner. 
                        It can break down difficult topics into smaller, more manageable parts and 
                        use analogies, examples, and step-by-step explanations to aid comprehension. 

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Whether it’s a challenging math theorem, a scientific principle, 
                        or a literary analysis, the AI chatbot tutor can adapt 
                        its explanations to your level of understanding, 
                        providing multiple explanations and perspectives until the concept is clear.
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        How specific do my questions need to be?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        While Tutor.ai can handle a range of question types, 
                        from broad inquiries to specific problems, 
                        providing detailed and specific questions can lead to more accurate and helpful responses. 
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        For instance, instead of asking “Can you help me with math?”, 
                        a more specific question like “How do you solve quadratic equations using the quadratic formula?” 
                        will yield a more targeted and useful answer. However, if you&apos;re 
                        unsure about how to phrase your question, the AI can guide you 
                        by asking follow-up questions to narrow down your query and provide the best possible assistance.
                     </Text>
                  </Flex>
               </Flex>
               


               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What if Tutor.ai doesn&apos;t understand my question?

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        If Tutor.ai doesn&apos;t understand your question, 
                        try rephrasing it with simpler or clearer language, providing additional context, and 
                        checking for any typos or grammatical errors. 
                        Using relevant keywords and referring to examples or similar problems can also help. 

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >



                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex> 
 
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
