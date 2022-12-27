import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('hello, world!')
})

export default app;