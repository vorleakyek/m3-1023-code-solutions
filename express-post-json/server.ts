import express, { Request, Response } from 'express';

const app = express();

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

let nextId: number = 1;
const grades: Record<number, Grade> = {};

app.get('/api/grades', (req: Request, res: Response) => {
  const gradesArray: Grade[] = [];
  for (let key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req: Request, res: Response) => {
  grades[nextId] = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score,
  };
  res.status(201).send(grades[nextId]);
  nextId = nextId + 1;
});

app.listen(8080, () => {
  console.log('Listening on port 8080.');
});
