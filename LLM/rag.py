from llama_index.core import VectorStoreIndex
from llama_index.core import Settings
from llama_index.llms.openai import OpenAI
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.core import Document
from llama_index.core.node_parser import SentenceSplitter
from llama_index.core.retrievers import QueryFusionRetriever
from llama_index.core import StorageContext, load_index_from_storage
from llama_index.core.query_engine import RetrieverQueryEngine
from llama_index.vector_stores.faiss import FaissVectorStore
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.core.chat_engine import ContextChatEngine
from llama_index.core.memory import ChatMemoryBuffer
from llama_index.core.base.llms.types import ChatMessage, MessageRole

from llama_index.retrievers.bm25 import BM25Retriever
from llama_index.core.retrievers import VectorIndexAutoRetriever
from llama_index.core.vector_stores import MetadataInfo, VectorStoreInfo
from llama_index.llms.llama_cpp import LlamaCPP
from llama_index.llms.llama_cpp.llama_utils import (
    B_INST,
    E_INST,
    DEFAULT_SYSTEM_PROMPT
)
import sys
import os
sys.path.append(os.path.join(os.path.dirname(os.getcwd()),"LLM"))
from page_index import get_all_chapter_title
from youtube import YouTubeSearcher
import os
import nest_asyncio
import json
class rag():
    def __init__(self):
        nest_asyncio.apply()

        embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-large-en-v1.5")
        Settings.embed_model = embed_model

        llm = LlamaCPP(
            # You can pass in the URL to a GGML model to download it automatically
            # optionally, you can set the path to a pre-downloaded model instead of model_url
            model_path="/home/coder/tutor.ai/LLM/mistral_model/ggml-model-f16.gguf",
            temperature=0.5,
            max_new_tokens=4096,
            # llama2 has a context window of 4096 tokens, but we set it lower to allow for some wiggle room
            context_window=7000,
            # kwargs to pass to __call__()
            generate_kwargs={},
            # kwargs to pass to __init__()
            # set to at least 1 to use GPU
            model_kwargs={"n_gpu_layers": 10},
            verbose=False,
            completion_to_prompt=self._completion_to_prompt
        )
        # llm = OpenAI(model="gpt-4-turbo",temperature=0.5,max_tokens=4096,response_format={ "type": "json_object" })
        
        
        Settings.llm = llm
        chapter_names = get_all_chapter_title()
        vector_store_info = VectorStoreInfo(
            content_info="information about a C Programming Book",
            metadata_info=[
                MetadataInfo(
                    name="Chapter_title",
                    description=f"""
                        Chapter_title one of {', '.join(chapter_names)}
                    """,
                    type="string",
                ),
                
            ],
        )

        # load index
        indexes = VectorStoreIndex([])

        bm25_indexes = []
        vector_storages_path_list = os.listdir("../LLM/vector_storage")
        vector_storages_path_list = [os.path.join("../LLM/vector_storage",vector_storages_path) for vector_storages_path in vector_storages_path_list]

        for vector_storages_path in vector_storages_path_list:
            
            storage_context = StorageContext.from_defaults(
                persist_dir=vector_storages_path
            )
            index = load_index_from_storage(storage_context)
            indexes.insert_nodes(list(index.docstore.docs.values()))
            
            
        retriever = VectorIndexAutoRetriever(
            indexes,
            vector_store_info=vector_store_info,
            verbose=True,
        )

        bm25_retriever = BM25Retriever.from_defaults(
        docstore=indexes.docstore, similarity_top_k=3
        )
        retriever = QueryFusionRetriever(
            [retriever,bm25_retriever],
            similarity_top_k=5,
            num_queries=0,  # set this to 1 to disable query generation
            use_async=True,
            verbose=False,
            mode="reciprocal_rerank",
        )


        memory = ChatMemoryBuffer.from_defaults(token_limit=4096)
        
        
        system_prompt = [
            ChatMessage(
                role="system", 
                content="""Generate assessment questions base on the given content. 
                You will only respond with a JSON object with only the question and answer. Do not provide explanations.
                #################
                Example #1 Input :
                [[SCHEMA]]
                [\{
                'question':,
                'answer':,
                \},
                \{
                'question':,
                'answer':,
                \}
                ]
                [[/SCHEMA]]
                #################
                """
                )
            ]
        self.chat_engine = ContextChatEngine(
            retriever,
            llm=llm,
            memory=memory,
            prefix_messages=system_prompt
        )
        self.chat_history = []

    def _completion_to_prompt(self,completion: str, system_prompt=None) -> str:
        system_prompt_str = system_prompt or DEFAULT_SYSTEM_PROMPT

        return (
            f"{B_INST} system: {system_prompt_str.strip()}  "
            f"user: {completion.strip()} assistant: {E_INST}\n\n"
        )

    
    
    def chat(self,query):


        response = self.chat_engine.chat(query,self.chat_history)
        # response = self.chat_engine.chat(query,self.chat_history)
        self.chat_history.append(ChatMessage(role="user",content=str(response)))
        return str(response)

    def clear_chat_history(self):
        self.chat_engine.reset()
        self.chat_history = []
        
    

    def get_youtube_type_response(self,query):
        query += \
        """
        JSON format must only contain these 2 keys: keyword, description for the value of keyword, 
        it must contain enough information that can be search on youtube
        Example #1 Input :
        [[SCHEMA]]
        'keyword',
        'description'
        [[/SCHEMA]]
        """
        response = self.chat(query)
        print(response)
        # cleaned_json_data = response.strip('```json').strip('```').strip()
        cleaned_json_data = json.loads(response)
        searcher = YouTubeSearcher()
        youtube_results = []
        keywords = []
        descriptions = []
        for keyword_description_pair in cleaned_json_data:
            keyword,description = keyword_description_pair.items()
            youtube_results.append(searcher.search_videos(keyword))
            keywords.append(keyword)
            descriptions.append(description)
        
        learning_outline = "Your learning outline is "
        related_youtube_link = "here is related youtube video link:"
        for keyword in keywords:
            learning_outline += keyword[1]
            learning_outline += " \n"
        for youtube_result_keywords in youtube_results:
            for youtube_result in youtube_result_keywords:
                related_youtube_link += "Title: "
                related_youtube_link += youtube_result[0]
                related_youtube_link += " "
                related_youtube_link += "Link: "
                related_youtube_link += youtube_result[1]
                related_youtube_link += "\n"
        final_response = \
        f"""
        {learning_outline}
        {related_youtube_link}
        """
        return final_response

# rag = rag()

# print(rag.chat("Generate assessment questions based on the chapter Formatted Input/Output"))
# print(rag.get_youtube_type_response("Given me an learning outline for Formatted Input/Output"))