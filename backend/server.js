import express from "express";
import mongoose from "mongoose";
import Routes from "./Routes.js";
import path from 'path';
//import { MONGO_URI } from "./URI.js";

//initialize express
const app = express();

//Database Connection with Mongoose
(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
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
app.use("/api", Routes);

//deployment
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
