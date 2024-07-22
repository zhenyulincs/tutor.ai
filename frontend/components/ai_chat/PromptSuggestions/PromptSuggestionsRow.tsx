import React from 'react';

import PromptSuggestionButton from "./PromptSuggestionButton";


interface PromptSuggestionRowProps {
  onPromptClick: (promptText: string) => void;  // Assuming this function takes an index and does not return anything
  prompt_index: number;
}

const PromptSuggestionRow : React.FC<PromptSuggestionRowProps> = ({ onPromptClick,prompt_index }) => {
  const prompts = [
    [
    'ENGR 213',
    'ENGR 456',
  ],
  [
    'Class preview/review',
    'Need Help with Homework',
    'Generated Some Paractice Quiz',
    'Free Talking'
  ],
];
// console.log(prompt_index);
  return (
    <div className="flex flex-row flex-wrap justify-start items-center py-4 gap-2">
      {prompts[prompt_index].map((prompt, index) => (
        <PromptSuggestionButton key={`suggestion-${index}`} text={prompt} onClick={() => onPromptClick(prompt)} />
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
