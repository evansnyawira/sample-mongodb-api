import express from 'express';
import { UserRoute } from './api/'
import connectDb from './db/db';
const app = express();

app.use(express.json())
app.use('/api', UserRoute);







export const start = async () => {
    await connectDb,
    app.listen(3000, () => console.log('up n running'));
}