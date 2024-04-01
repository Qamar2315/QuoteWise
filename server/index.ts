import express, {Application,Request,Response} from "express";
import mongoose from "mongoose";
import cors from "cors"
// import deckRoutes from './routes/deck';
import { notFound, errorHandler } from './middlwares/ErrorHandler';

const app:Application = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes middlewares
// app.use('/api/decks', deckRoutes);

//not found middleware
app.use(notFound);

//errorhandler middleware
app.use(errorHandler);

//database connection
main().catch(err => console.log(err))
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/quotewise_database');
  console.log("connected");
}

app.listen(8080, () => {
    console.log("server is listening at port",8080)
});