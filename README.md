## Weather App
This project consists of both frontend and backend components that interact with each other to display weather data. The backend handles API requests, while the frontend displays charts and allows users to interact with the data.

Project Structure
The project is divided into two main directories:

client/weather-front: Contains the React frontend application.
server: Contains the Node.js backend application.
Installation
Follow the steps below to set up the project on your local machine.

Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/weather-app.git
cd weather-app
Install dependencies for both frontend and backend:

bash
Copy code
npm install
cd client/weather-front
npm install
cd ../../
Development Setup
Running the Development Environment
To run both the frontend and backend in development mode, use the following script:

bash
Copy code
npm run dev
This will run the development environment with the following:

Frontend: The frontend will be started using vite in the client/weather-front directory.
Backend: The backend will be started with tsc --watch and nodemon to watch for TypeScript and server file changes in the server directory.
Running the Application in Production Mode
To start the frontend and backend in production mode, use:

bash
Copy code
npm run start
This will run both the frontend and backend in production mode:

Frontend: Will run in production mode.
Backend: Will run the compiled server files (dist).
Server Scripts
Development (Backend):

bash
Copy code
npm run dev-backend
This starts the backend server in development mode, using ts-node-dev to watch for changes in the server directory.

Start (Backend):

bash
Copy code
npm run start-backend
This starts the backend server in production mode, using the compiled JavaScript files in the dist folder.

Frontend Scripts
Development (Frontend):
bash
Copy code
npm run dev-frontend
This starts the frontend development server with vite, using the client/weather-front directory.
API Endpoints
The backend API provides weather data and accepts date ranges to retrieve weather history. The relevant endpoint is:

POST / - Accepts a start_date and end_date and returns an array of historical weather data.
File Structure
client/weather-front: React app (Frontend)

src/: Contains React components and hooks.
public/: Static files for the frontend.
vite.config.ts: Vite configuration for React with TypeScript.
server: Node.js app (Backend)

src/: Contains backend code, API routes, and utility functions.
dist/: Compiled JavaScript files from TypeScript source code.
tsconfig.json: TypeScript configuration for backend development.
Running Tests
(If applicable) If you have any test setup for your frontend or backend, you can use the following command to run tests for the respective components.

bash
Copy code
# For frontend tests
npm run test --prefix client/weather-front

# For backend tests
npm run test --prefix server
Configuration
TypeScript Configuration
Make sure the tsconfig.json files are correctly set for both frontend and backend to handle ES modules. For the backend, ensure that moduleResolution is set to node, and the output directory is set to dist.

CORS Configuration
The backend has CORS configured to allow communication from the frontend. If needed, modify the CORS settings in the backend to match your environment.

Notes
The frontend is built using React with TypeScript and Tailwind CSS.
The backend is a Node.js server using TypeScript and handles API requests related to weather data.
The client and server are run concurrently using the concurrently package.
License
This project is licensed under the MIT License.