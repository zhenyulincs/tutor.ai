from pdf2image import convert_from_path
from datasets import Dataset
from tqdm import tqdm
from llama_index.core import VectorStoreIndex
from llama_index.core.node_parser import SentenceSplitter
from llama_index.core import Document, StorageContext
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.core import Settings
from page_index import get_chapter_title
from llama_index.embeddings.openai import OpenAIEmbedding

import pytesseract
import PyPDF2
import tempfile
import os
import spacy
import json
import time



def get_pdf_reader(path):
    # Open the file and create a PdfReader object
    file = open(path, 'rb')
    reader = PyPDF2.PdfReader(file)
    return reader

def get_pdf_total_page(reader):
    return len(reader.pages)

def pdf_to_text(reader, read_page):
    # Open the PDF file
    writer = PyPDF2.PdfWriter()

    # Get the specific page
    page = reader.pages[read_page]  # Use start_page parameter
    writer.add_page(page)

    # Create a temporary PDF file to store the specific page
    with tempfile.NamedTemporaryFile(suffix='.pdf', mode='wb', delete=False) as tmp:
        writer.write(tmp)
        temp_file_path = tmp.name  # Store the file path for later use
        
    # Convert the page to an image
    images = convert_from_path(temp_file_path)

    # Perform OCR on the first image of the list
    text = pytesseract.image_to_string(images[0])

    # Clean up: remove the temporary PDF file
    os.remove(temp_file_path)

    return text

def save_dataset(filename,documents):
    node_parser = SentenceSplitter(chunk_size=1024, chunk_overlap=20)
    nodes = node_parser.get_nodes_from_documents(
        documents, show_progress=True
    )
    
    index = VectorStoreIndex(nodes)
    index.storage_context.persist(persist_dir=filename)

        
        


path = "LLM/C_Programming_Textbook.pdf"
pdf_reader = get_pdf_reader(path)
total_page = get_pdf_total_page(pdf_reader)

embed_model = OpenAIEmbedding(model="text-embedding-3-large")

embeddings_dim = len(embed_model.get_text_embedding("Hello World!"))
Settings.embed_model = embed_model


record_counter = 0
documents = []
for read_page in tqdm(range(total_page)):
    
    pdf_txt = pdf_to_text(pdf_reader,read_page)
    chapter_title = get_chapter_title(read_page + 1)
    document = Document(text=pdf_txt, metadata={"Chapter_title": chapter_title})
    try:
        
        documents.append(document)
        record_counter+=1
    except Exception as e:
        print(f"GPT Response Error{e}")
        continue
    
    if record_counter % 5 == 0:
        save_dataset(f"LLM/vector_storage/C_Programming_textbok_p{read_page}",documents)
        documents = []

save_dataset(f"LLM/vector_storage/C_Programming_textbok_p{read_page}",documents)
pdf_reader.stream.close()