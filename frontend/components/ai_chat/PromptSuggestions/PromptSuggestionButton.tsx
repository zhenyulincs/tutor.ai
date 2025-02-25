import React from 'react';

interface PromptSuggestionButtonProps {
  text: string;
  onClick: () => void;  // Assuming onClick does not expect any arguments and doesn't return anything
}
const PromptSuggestionButton: React.FC<PromptSuggestionButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="prompt-button text-sm py-2 px-4 rounded-lg overflow-hidden whitespace-nowrap focus:outline-none focus:shadow-outline"
    >
      {text}
    </button>
  );
};

export default PromptSuggestionButton;
