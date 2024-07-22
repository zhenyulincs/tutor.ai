from llama_index.core import VectorStoreIndex
from llama_index.core import Settings
from llama_index.llms.openai import OpenAI
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.core import Document
from llama_index.core.node_parser import SentenceSplitter
from llama_index.core.retrievers import QueryFusionRetriever
from llama_index.core import StorageContext, load_index_from_storage
from llama_index.core.query_engine import RetrieverQueryEngine
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

        embed_model = OpenAIEmbedding(model="text-embedding-3-large")
        Settings.embed_model = embed_model

        self.llm = OpenAI(model="gpt-4-turbo",temperature=0.1,max_tokens=4096)
    
        Settings.llm = self.llm

        self.chat_history = []
    def set_vector_storage(self,path):
        
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
        vector_storages_path_list = os.listdir(path)
        vector_storages_path_list = [os.path.join(path,vector_storages_path) for vector_storages_path in vector_storages_path_list]

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
            verbose=True,
            mode="reciprocal_rerank",
        )


        memory = ChatMemoryBuffer.from_defaults(token_limit=4096)
        
        #### Mistral Model Only, Mistral Model need to specify JSON on system prompt also the user query
        system_prompt = [
            ChatMessage(
                role="system", 
                content=\
                    """
                    You are a helpful assistant.
                    """
                )
            ]

        self.chat_engine = ContextChatEngine(
            retriever,
            llm=self.llm,
            memory=memory,
            prefix_messages=system_prompt
        )
        

    def _completion_to_prompt(self,completion: str, system_prompt=None) -> str:
        system_prompt_str = system_prompt or DEFAULT_SYSTEM_PROMPT

        return (
            f"{B_INST} system: {system_prompt_str.strip()}  "
            f"user: {completion.strip()} assistant: {E_INST}\n\n"
        )

    
    
    def chat_rag(self,query):
        print(self.chat_history)
        response = self.chat_engine.chat(query,self.chat_history)
        return str(response)

    def chat_regular(self,query):
        self.chat_history.append(ChatMessage(role='user', content=query))
        response = self.llm.chat(self.chat_history).message.content
        
        return response
    
    def clear_chat_history(self):
        self.chat_engine.reset()
        self.chat_history = []
        
    def convert_to_chat_message(self,messages):

        self.chat_history = [ChatMessage(role=message['role'], content=message['content']) for message in messages]


    def get_youtube_type_response(self,query):
        post_query = "You will only respond with a list of JSON objects with the key youtube_search_keyword and description. Do not provide explanations."
        rephase_query = query + post_query

        response = self.chat_rag(rephase_query)
        cleaned_json_data = json.loads(response)
        searcher = YouTubeSearcher()
        youtube_results = []
        keywords = []
        descriptions = []
        for keyword_description_pair in cleaned_json_data:
            keyword,description = keyword_description_pair.values()
            youtube_results.append(searcher.search_videos(keyword))
            keywords.append(keyword)
            descriptions.append(description)
        
        self.clear_chat_history()
        query_with_video_content = f"Base on the following information {str(youtube_results)}, use tutor's style to answer {query}. make sure your answer should include all the youtube link"
        response_with_video_content = self.chat_regular(query_with_video_content)
        return response_with_video_content

# rag = rag()

# print(rag.chat_rag("Given me an learning outline for Formatted Input/Output"))
# print(rag.chat_engine.chat("Given me an outline for Formatted Input/Output.",[]))
# print(rag.get_youtube_type_response(query="Given me an outline for Formatted Input/Output"))