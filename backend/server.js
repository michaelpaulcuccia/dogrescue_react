import express from 'express';
import mongoose from 'mongoose';
import Route from './Route.js';
import { MONGO_URI } from './URI.js'

//initialize dotenv
//dotenv.config();
//import dotenv from 'dotenv';
//process.env.MONGO_URI,

//initialize express
const app = express();

//Database Connection with Mongoose
(async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (err) {
        console.error(`Error: ${err.message}`);
        //exit process with failure
        process.exit(1);
    }
})();

//Routes
app.use('/api', Route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening in ${process.env.NODE_ENV} mode on port ${PORT}`);
});