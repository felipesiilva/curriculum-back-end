import express, { json } from 'express';
import cors from 'cors';
import { db } from './database/db';
import { router } from "./routes";

const app = express();


const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))



app.use(json());
app.use(router);


app.listen(3000, async () => {
    await db.sync();
    console.log('Server on!');
});