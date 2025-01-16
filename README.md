# Weather App
This project consists of both frontend and backend components that interact with each other to display historical weather data. The backend handles API requests, while the frontend let the user pick the date range to look at, displays charts and allows users to interact with the data.

## Project Structure
The project is divided into two main directories:

**client/weather-front:** Contains the React frontend application.

**server:** Contains the Node.js backend application.

## Installation
Follow the steps below to set up the project on your local machine.

#### Prerequisites
Node.js (v14 or higher)  
npm (v6 or higher)  
Setup  
**Clone the repository:**
  `git clone https://github.com/ofirs22/wethear.git  
  `cd weather-app  `  

- Install dependencies for project, frontend and backend:
 
  `npm install-all` - script to install all project dependencies  `  

### Development Setup  
Running the Development Environment  
To run both the frontend and backend in development mode, use the following script:  

`npm run dev  `  
This will run the development environment with the following:  

**Frontend:** The frontend will be started using vite in the client/weather-front directory.
**Backend:** The backend will be started with tsc --watch and nodemon to watch for TypeScript and server file changes in the server directory.

### Running the Application in Production Mode
To start the frontend and backend in production mode, use:

  `npm run start  `  
  This will run both the frontend and backend in production mode:

Frontend: Will run in production mode.
Backend: Will run the compiled server files (dist).

### **Server Scripts**
**Development (Backend):**

  `npm run dev-backend  `  
  This starts the backend server in development mode, using ts-node-dev to watch for changes in the server directory.

**Start (Backend):**

  `npm run start-backend  `  
  This starts the backend server in production mode, using the compiled JavaScript files in the dist folder.

### **Frontend Scripts**

**Development (Frontend):**
 
  `npm run dev-frontend  `  
    This starts the frontend development server with vite, using the client/weather-front directory.

## API Endpoints
The backend API provides weather data and accepts date ranges to retrieve weather history. The relevant endpoint is:
POST / - Accepts a start_date and end_date and returns an array of historical weather data.

## **File Structure**

### **client/weather-front: React app (Frontend)**
  src/: Contains React components and hooks.
  public/: Static files for the frontend.
  vite.config.ts: Vite configuration for React with TypeScript.

### **server: Node.js app (Backend)**

  src/: Contains backend code, API routes, and utility functions.
  src/routes - Contains the API routes
  src/controllers - Contains the controller functions
  dist/: Compiled JavaScript files from TypeScript source code.
  tsconfig.json: TypeScript configuration for backend development.

## Dependencies

### Frontend Dependencies
- **Core**:
  - `react`: ^18.2.0 - UI library for building user interfaces
  - `react-dom`: ^18.2.0 - React rendering for web
  - `vite`: ^5.0.0 - Next generation frontend tooling

- **Data Visualization**:
  - `chart.js`: ^4.0.0 - Powerful charting library
  - `react-chartjs-2`: ^5.0.0 - React wrapper for Chart.js

- **Styling**:
  - `tailwindcss`: ^3.0.0 - Utility-first CSS framework
  - `postcss`: ^8.0.0 - CSS transformations tool
  - `autoprefixer`: ^10.0.0 - CSS vendor prefixing

- **Type Checking**:
  - `typescript`: ^5.0.0 - JavaScript with syntax for types
  - `@types/react`: ^18.2.0 - TypeScript definitions for React
  - `@types/react-dom`: ^18.2.0 - TypeScript definitions for React DOM

### Backend Dependencies
- **Core**:
  - `express`: ^4.18.0 - Web framework for Node.js
  - `cors`: ^2.8.5 - Cross-Origin Resource Sharing middleware
  - `dotenv`: ^16.0.0 - Environment variables management
 
- **Security**:
  - `helmet`: ^7.1.0 - Secure Express apps by setting various HTTP headers
  - Protects against:
    - Cross-Site-Scripting (XSS)
    - Content Security Policy
    - DNS Prefetch Control
    - Frameguard to prevent clickjacking
    - Hide Powered-By
    - HSTS for secure connections
    - And more security headers


- **TypeScript Support**:
  - `typescript`: ^5.0.0 - JavaScript with syntax for types
  - `ts-node`: ^10.9.0 - TypeScript execution engine
  - `@types/express`: ^4.17.0 - TypeScript definitions for Express
  - `@types/node`: ^20.0.0 - TypeScript definitions for Node.js

- **Development**:
  - `nodemon`: ^3.0.0 - Auto-restarting node application
  - `ts-node-dev`: ^2.0.0 - TypeScript development with restart
  - `eslint`: ^8.0.0 - JavaScript linting utility
  - `prettier`: ^3.0.0 - Code formatting tool

- **API & Data Handling**:
  - `axios`: ^1.6.0 - Promise based HTTP client
  - `body-parser`: ^1.20.0 - Request parsing middleware
  - `date-fns`: ^3.0.0 - Date utility library

## CORS Configuration
The backend has CORS configured to allow communication from the frontend. If needed, modify the CORS settings in the backend to match your environment.

## Notes

The frontend is built using React with TypeScript and Tailwind CSS.
The backend is a Node.js server using TypeScript and handles API requests related to weather data.
The client and server are run concurrently using the concurrently package.

## License

This project is licensed under the MIT License.