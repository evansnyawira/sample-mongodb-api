import express from 'express';
import { UserRoute } from './api/'

const app = express();

app.use(express.json())
app.use('/api', UserRoute);





export const start = async () => {    
    app.listen(3000, () => console.log('up n running'));
}