import express from 'express';
//jeśli użyjemy esModuleInterop to nie trzeba * as
import 'express-async-errors';
import cors from 'cors';
import {handleError} from "./utils/utils";

const app = express();

 app.use(cors({
     origin:"http://localhost:3000",
 }));

 app.use(express.json());



app.use(handleError);

app.listen(3001,() => {
    console.log("App is running on 3001 port!");
})