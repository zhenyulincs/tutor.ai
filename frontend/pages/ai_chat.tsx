"use client";
import type { NextPage } from 'next';

import { useEffect, useRef, useState } from 'react';
import Bubble from '../components/ai_chat/Bubble';
import { useChat, Message } from '@ai-sdk/react';
import PromptSuggestionRow from '../components/ai_chat/PromptSuggestions/PromptSuggestionsRow';
import ThemeButton from '../components/ai_chat/ThemeButton';
import Image from 'next/image';

const AI_Chat: NextPage = () => {

  const pre_messages: Message[] = []

  const init_messages: Message[] = [
    {
      id: crypto.randomUUID(), content: "Welcome to AICO, I am WisdomWhiz, can you tell me what class you are taking?", role: 'assistant'
    }
  ]


  const functionality_question = (selected_class: string): Message[] => {
    return [
      {
        id: crypto.randomUUID(),
        content: `Great, you are taking ${selected_class}, What brings you in today?`,
        role: 'assistant'
      }
    ];
  }
    
  const connecting_message : Message[] = [
    {
      id: crypto.randomUUID(),
      content: `Great, connecting you to the backend AI Service, give us one moment...`,
      role: 'assistant'
    }
  ]

  const { append, messages, input, handleInputChange, handleSubmit, setMessages } = useChat(
    { api: "https://ai.sfsu-miclab.org/api/ai", 
      initialMessages: init_messages, 
      streamMode: 'text',
      headers: {"Content-Type":"application/json"}}
  );

  const users_message_count = messages.filter(item => item.role === 'user').length;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    console.log(messagesEndRef.current)
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, { options: {  } });
  };

  const handlePrompt = async (promptText: string) => {
    const msg: Message = { id: crypto.randomUUID(), content: promptText, role: 'user' };
    
    pre_messages.push(msg);
    if (users_message_count == 0) {
      pre_messages.push(...functionality_question(msg.content));
      setMessages([...messages,...pre_messages]);
    } 
    
    else {
      append(msg, { options: {  } });
    }
    
    

  };
  


  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center">
        <section className='chatbot-section flex flex-col origin:w-[800px] w-full origin:h-[735px] h-full rounded-md p-2 md:p-6'>
          <div className='chatbot-header'>
            <div className='flex justify-between'>
		<a href="../">
              <div className='flex items-center gap-2 mb-1'>
                <img src={"../owl.jpg"} width="5%" alt=''/>
                {/* <svg width="24" height="25" viewBox="0 0 24 25">
                  <path d="M20 9.96057V7.96057C20 6.86057 19.1 5.96057 18 5.96057H15C15 4.30057 13.66 2.96057 12 2.96057C10.34 2.96057 9 4.30057 9 5.96057H6C4.9 5.96057 4 6.86057 4 7.96057V9.96057C2.34 9.96057 1 11.3006 1 12.9606C1 14.6206 2.34 15.9606 4 15.9606V19.9606C4 21.0606 4.9 21.9606 6 21.9606H18C19.1 21.9606 20 21.0606 20 19.9606V15.9606C21.66 15.9606 23 14.6206 23 12.9606C23 11.3006 21.66 9.96057 20 9.96057ZM7.5 12.4606C7.5 11.6306 8.17 10.9606 9 10.9606C9.83 10.9606 10.5 11.6306 10.5 12.4606C10.5 13.2906 9.83 13.9606 9 13.9606C8.17 13.9606 7.5 13.2906 7.5 12.4606ZM16 17.9606H8V15.9606H16V17.9606ZM15 13.9606C14.17 13.9606 13.5 13.2906 13.5 12.4606C13.5 11.6306 14.17 10.9606 15 10.9606C15.83 10.9606 16.5 11.6306 16.5 12.4606C16.5 13.2906 15.83 13.9606 15 13.9606Z" />
                </svg> */}
                <h1 className='chatbot-text-primary text-xl md:text-2xl font-medium' style={{margin:'0'}}>AICO</h1>
              </div></a>
              <div className='flex gap-1'>
                <ThemeButton />
              </div>
            </div>
          </div>
          <div className='flex-1 relative overflow-y-auto my-4 md:my-6'>
            <div className='absolute w-full overflow-x-hidden'>
              {messages.map((message, index) => (
                <Bubble key={`message-${index}`} content={message} />
              ))}
              <div className="block mt-4 md:mt-6 pb-[7px] clear-both float-left"  ref={messagesEndRef} />
            </div>
          </div>
          {users_message_count < 2 && (
            <PromptSuggestionRow onPromptClick={handlePrompt} prompt_index={users_message_count} />
          )}
          <form className='flex h-[40px] gap-2' onSubmit={handleSend}>
            <input
              onChange={handleInputChange}
              value={input}
              className='chatbot-input flex-1 text-sm md:text-base outline-none bg-transparent rounded-md p-2'
              placeholder='Input disabled, Please use the suggest prompt first...'
              
            />
            <button type="submit" className='chatbot-send-button flex rounded-md items-center justify-center px-2.5 origin:px-3'>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M2.925 5.025L9.18333 7.70833L2.91667 6.875L2.925 5.025ZM9.175 12.2917L2.91667 14.975V13.125L9.175 12.2917ZM1.25833 2.5L1.25 8.33333L13.75 10L1.25 11.6667L1.25833 17.5L18.75 10L1.25833 2.5Z" />
              </svg>
              <span className='hidden origin:block font-semibold text-sm ml-2'>Send</span>
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
export default AI_Chat;
