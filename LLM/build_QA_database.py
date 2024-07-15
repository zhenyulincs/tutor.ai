import json
import os
import pandas as pd
from sklearn.model_selection import train_test_split
from rag import rag
from page_index import get_all_chapter_title

class QADataProcessor:
    def __init__(self):
        self.model = rag()

    def generate_qa_set(self):
        titles = get_all_chapter_title()
        for index, title in enumerate(titles):
            dataframe_array = []
            for i in range(20):
                prompt = f"""
                Generate assessment questions based on the chapter {title} in JSON object
                """
                try:
                    q_a_pair = self.model.chat(query=prompt)
                    q_a_pair = json.loads(q_a_pair)
                    dataframe_array.append(pd.DataFrame(q_a_pair))
                    self.model.clear_chat_history()
                except Exception as e:
                    print("Model Output error: ", e)

            df = pd.concat(dataframe_array, ignore_index=True)
            csv_file_path = f"q_a_pairs_mistral_training_{index}.csv"
            df.to_csv(csv_file_path, index=False)

    def combine_csv(self, folder_path, combined_csv_file_name):
        combined_df = pd.DataFrame()
        for filename in os.listdir(folder_path):
            if filename.endswith('.csv'):
                file_path = os.path.join(folder_path, filename)
                df = pd.read_csv(file_path)
                combined_df = pd.concat([combined_df, df], ignore_index=True)
        combined_file_path = os.path.join(folder_path, combined_csv_file_name)
        combined_df.to_csv(combined_file_path, index=False)

    def csv_to_jsonl_conversational(self, csv_file_path, train_jsonl_file_path, test_jsonl_file_path):
        df = pd.read_csv(csv_file_path)
        train_df, test_df = train_test_split(df, test_size=0.95)
        self._write_to_jsonl(train_df, train_jsonl_file_path)
        self._write_to_jsonl(test_df, test_jsonl_file_path)

    def _write_to_jsonl(self, df, jsonl_file_path):
        with open(jsonl_file_path, mode='w', encoding='utf-8') as jsonl_file:
            for _, row in df.iterrows():
                if pd.notnull(row["question"]) and pd.notnull(row["answer"]):
                    messages = [
                        {"role": "user", "content": row["question"]},
                        {"role": "assistant", "content": row["answer"]}
                    ]
                    jsonl_obj = {"messages": messages}
                    jsonl_file.write(json.dumps(jsonl_obj) + '\n')


if __name__ == "__main__":
    processor = QADataProcessor()

    # Generate QA sets
    # processor.generate_qa_set()

    # Combine CSV files
    folder_path = "/home/coder/tutor.ai/LLM/QA_Dataset/"
    # processor.combine_csv(folder_path, "q_a_pairs_mistral.csv")

    # Convert CSV to JSONL
    csv_file_path = os.path.join(folder_path, 'q_a_pairs_mistral.csv')
    train_jsonl_file_path = os.path.join(folder_path, 'q_a_pairs_mistral_train.jsonl')
    test_jsonl_file_path = os.path.join(folder_path, 'q_a_pairs_mistral_test.jsonl')
    processor.csv_to_jsonl_conversational(csv_file_path, train_jsonl_file_path, test_jsonl_file_path)
