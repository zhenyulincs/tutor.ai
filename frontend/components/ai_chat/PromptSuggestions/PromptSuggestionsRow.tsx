import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick,prompt_index }) => {
  const prompts = [
    [
    'ENGR 213',
    'ENGR 456',
    'ENGR 478',
    'ENGR 413',
  ],
];
  console.log(prompt_index);
  return (
    <div className="flex flex-row flex-wrap justify-start items-center py-4 gap-2">
      {prompts[prompt_index].map((prompt, index) => (
        <PromptSuggestionButton key={`suggestion-${index}`} text={prompt} onClick={() => onPromptClick(prompt)} />
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
