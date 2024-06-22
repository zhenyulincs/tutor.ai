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
    'ENGR 478',
    'ENGR 413',
  ],
  [
    'Preview Class',
    'Review Class',
    'I don\' know how to do the homework',
    'Not sure where do I got wrong for the homework',
    'Preparing exam, need more paractice problems',
    'Got an bad grade on exam, need analysis my weakness on knowledge'
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
