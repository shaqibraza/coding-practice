import express from 'express';
import userRouter from './routes/userRoutes.js'
import bodyParser from 'body-parser';

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/health', (req, res) => {
    res.send('app is healthy');
});

app.use('/api', userRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})