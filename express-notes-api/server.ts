import express, { Request, Response, NextFunction } from 'express';
import { readFile, writeFile } from 'node:fs/promises';
import { customErrorMiddleware } from './error-middleware.js';
import { ClientCustomError } from './client-error.js';
import { read } from 'node:fs';

type Note = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: Record<string, Note>;
};

const app = express();
app.use(express.json());

async function readData(): Promise<Data> {
  const data = await readFile('./data.json');
  return JSON.parse(data.toString());
}

async function writeData(data: Data) {
  const content = JSON.stringify(data, null, 2);
  await writeFile('data.json', content);
}

app.get(
  '/api/notes',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await readData();
      const notes: Note[] = [];
      for (const id in data.notes) {
        notes.push(data.notes[id]);
      }
      res.json(notes);
    } catch (err) {
      next(err);
    }
  }
);

app.get(
  '/api/notes/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await readData();
      const id = Number(req.params.id);
      if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
        throw new ClientCustomError(400, 'id must be a positive integer');
      }
      if (data.notes[id] === undefined) {
        throw new ClientCustomError(404, `cannot find note with id ${id}`);
      }
      res.json(data.notes[id]);
    } catch (err) {
      next(err);
    }
  }
);

app.post(
  '/api/notes',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const content = req.body.content;
      if (content === undefined) {
        throw new ClientCustomError(400, 'content is a required field');
      }

      const data = await readData();
      const nextId = data.nextId;
      data.notes[nextId] = {
        id: nextId,
        content: content,
      };
      const addedData = data.notes[nextId];
      data.nextId = data.nextId + 1;
      await writeData(data);
      res.status(201).json(addedData);
    } catch (err) {
      next(err);
    }
  }
);

app.delete(
  '/api/notes/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await readData();
      const id = Number(req.params.id);
      if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
        throw new ClientCustomError(400, 'id must be a positive integer');
      }

      if (data.notes[id] === undefined) {
        throw new ClientCustomError(404, `cannot find note with id ${id}`);
      }

      delete data.notes[id];
      await writeData(data);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);

app.put('/api/notes/:id', async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const data = await readData();
    const id = Number(req.params.id);
    const content = req.body.content;
    if(Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      throw new ClientCustomError(400, 'id must be a positive integer');
    }
    if (content === undefined) {
      throw new ClientCustomError(400, 'content is a required field');
    }
    if (data.notes[id] === undefined) {
      throw new ClientCustomError(404, `cannot find note with id ${id}`);
    }


    data.notes[id].content = content;
    await writeData(data);
    res.status(200).json(data.notes[id]);

  }catch(err) {
    next(err)
  }
})

app.use(customErrorMiddleware);

app.listen(8080, () => {
  console.log('Listen to port 8080');
});
