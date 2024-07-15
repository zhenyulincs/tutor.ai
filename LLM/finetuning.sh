#!/bin/bash

DIR="finetuning_result"

# Check if the directory exists
if [ -d "$DIR" ]; then
  echo "Directory $DIR exists. Removing it..."
  rm -rf "$DIR"
  echo "Directory $DIR has been removed."
else
  echo "Directory $DIR does not exist."
fi

# Change to the desired directory
if cd "mistral-finetune"; then
  # Set environment variables
  export CUDA_DEVICE_ORDER="PCI_BUS_ID"
  export CUDA_VISIBLE_DEVICES="0"

  # Run the training script
  torchrun --nproc-per-node 1 -m train ../finetuning.yaml
else
  echo "Failed to change directory to LLM/mistral-finetune"
  exit 1
fi
