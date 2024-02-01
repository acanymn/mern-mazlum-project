import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import MainTableRouter from './routes/maintable.route.js'

env.config();

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("MongoDB is connected!");
}).catch((error) => {
    console.log(error);
});

const app = express();

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

app.use('/api', MainTableRouter);
