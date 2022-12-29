import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from '../infrastructure/routes/userRoutes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/user', userRoutes)

export default app;