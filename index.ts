import express from 'express';
//jeśli użyjemy esModuleInterop to nie trzeba * as
import 'express-async-errors';
import cors from 'cors';
import {handleError} from "./utils/utils";
import rateLimit from 'express-rate-limit';
import {AdRecord} from "./records/ad.record";

const app = express();

 app.use(cors({
     origin:"http://localhost:3000",
 }));

 app.use(express.json());

 //100 zapytań na 5 min
 app.use(rateLimit({
     max:100,
     windowMs:5*60*1000,
 }));





app.use(handleError);

app.listen(3001,() => {
    console.log("App is running on 3001 port http://localhost:3001/ !");
})