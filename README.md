
# Project Name

## Introduction

This project leverages advanced Large Language Models (LLMs) to create personalized learning experiences for STEM education. By utilizing domain-specific data and tailored AI capabilities, the platform empowers students and educators to bridge knowledge gaps effectively. The solution offers features such as automated content generation, class previews and reviews, and step-by-step problem-solving guidance. Designed with a focus on enhancing academic engagement and outcomes, this platform integrates cutting-edge AI technology to address the limitations of traditional classroom settings and existing personalized learning tools.

## Installation

To set up the project, follow these steps:

1. **Run the Environment Setup Script**:
   Open a terminal and execute the following script:
   ```bash
   bash environment.sh
   ```

2. **Frontend Setup**:
   Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
   Install the dependencies and start the frontend server:
   ```bash
   npm install
   npm run start
   ```

3. **Backend Setup**:
   Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
   Configure the environment by filling out the `.env.development` and `.env.production` files with the required settings. Then, start the backend server:
   ```bash
   flask run
   ```
