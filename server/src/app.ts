import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import routes from "./routes/index.js";


dotenv.config();
const corsOptions:CorsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
    methods: 'POST'
}

const app: Application = express();
// Middleware
app.use(cors(corsOptions)); // Enable CORS for all routes
app.use(helmet()); // Add security headers
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Error handler middleware (place this last in the middleware stack)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    console.log(err)
    // console.error(err.stack);  // Log the error stack
    
    res.status(statusCode).json({
      message: err.message || 'Internal Server Error'
    });
  });

// Routes
app.use("/", routes);

export default app;