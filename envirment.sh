#!/bin/sh
export CMAKE_ARGS="-DGGML_CUDA=on -DLLAVA_BUILD=off" &&\
pip install llama-cpp-python && \
pip install -r requirements.txt