# Therapist Toolbox

Therapist Toolbox is a web-based tool designed to assist mental health practitioners in generating tailored mental health scenarios and techniques for clients. This application utilizes the OpenAI API to provide personalized scenarios and techniques based on the selected mental health diagnosis and skills.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Key Configuration](#api-key-configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Form:** Select a mental health diagnosis and related techniques.
- **Scenario Generation:** Automatically generate tailored scenarios based on the selected options.
- **Interactive UI:** Simple and responsive user interface for ease of use.
- **Customizable Techniques:** Ability to extend the tool with additional mental health techniques.

## Installation
npm install

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/agure772/therapist-toolbox.git
   cd therapist-toolbox

## Create a .env file in the root of your project and add your OpenAI API key:
OPENAI_API_KEY=your_openai_api_key_here

## Start the server by running:
node server.js

Usage
Open your web browser and navigate to http://localhost:3000.
Select a mental health diagnosis from the dropdown menu.
Choose a related technique from the options that appear.
Click "Submit" to generate a possible scenario based on your selections.
The generated scenario will be displayed on the page.

File Structure
index.html - The main HTML file containing the user interface.
styles.css - The CSS file for styling the application.
scripts.js - The JavaScript file responsible for dynamic functionality.
server.js - The Node.js server that handles API requests and serves the front-end files.
.env - Environment variables file (used to store the OpenAI API key).


API Key Configuration
To use the OpenAI API, you'll need to set up your API key in the .env file:

Sign up or log in to your OpenAI account.

Navigate to the API keys section and copy your API key.

Create a .env file in the root of your project and add your API key as shown:
OPENAI_API_KEY=your_openai_api_key_here


Technologies Used
Node.js - JavaScript runtime for the server-side logic.
Express.js - Web framework for building the server.
OpenAI API - Used to generate mental health scenarios and techniques.
HTML/CSS/JavaScript - Front-end technologies for building the user interface.


Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

This project is licensed under the MIT License
