import express, {Request,Response} from 'express';

const app = express();

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grade: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

app.get('/api/grades', (req:Request, res:Response)=>{
  const gradeArray: Grade[] = [];
  for (let key in grade){
    gradeArray.push(grade[key]);
  }
  res.json(gradeArray);
})

app.listen(8080, ()=>{
  console.log('Listening on port 8080.');
});
