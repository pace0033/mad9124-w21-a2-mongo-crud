import express from 'express';
import morgan from 'morgan';
import sanitizeMongo from 'express-mongo-sanitize';
import studentsRouter from './routes/students.js';

// Connect to Mongo DB
import connectDatabase from './startup/connectDatabase.js';
connectDatabase();

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(sanitizeMongo());

// Routes
app.use('/api/students', studentsRouter);

export default app;