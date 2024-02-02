import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import MainTableRouter from './routes/maintable.route.js'
import AuthPassword from './routes/authpassword.route.js'

env.config();
const app = express();

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("MongoDB is connected!");
}).catch((error) => {
    console.log(error);
});

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

app.use('/api', MainTableRouter);
app.use('/api', AuthPassword);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
