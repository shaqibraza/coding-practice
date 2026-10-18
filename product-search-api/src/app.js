import express from 'express'
import productRouter from './routes/productRoutes.js'

const PORT = 5000;
const app =  express();

app.use(express.json());

app.post('/health', (req, res) => {
    res.send('app is healthy')
})

app.use('/api', productRouter);

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
});