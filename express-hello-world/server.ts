import express, {Request, Response} from 'express';

const app = express();
app.use((req: Request, res: Response)=>{
 console.log(req.method);
 res.send('Hello, World!');
})

app.listen(8080, ()=>{
  console.log('Listening on port 8080.');
})
