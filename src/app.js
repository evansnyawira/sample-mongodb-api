import express from 'express';
import { UserRoute } from './api/'
import { AppError } from './api/error/error';
import { errorHandler } from './api/error/errorController';

const app = express();
app.set()
app.use(express.json())
app.use('/api', UserRoute);




app.all('*', (req, res, next) => {
    next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));

})
app.use(errorHandler)
export const start = async () => {    
    app.listen(3000, () => console.log('up n running'));
}