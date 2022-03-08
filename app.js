import express from 'express';
import morgan from 'morgan';

// Connect to Mongo DB
import connectDatabase from './startup/connectDatabase.js';
connectDatabase();

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

// Routes

export default app;