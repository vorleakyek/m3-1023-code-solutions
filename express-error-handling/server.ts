/* eslint-disable @typescript-eslint/no-unused-vars -- REMOVE ME */
import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

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
  await writeFile('./data.json', JSON.stringify(data, null, 2));
}

app.get('/api/notes', async (req, res,next) => {
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
});

app.get('/api/notes/:id', async (req, res,next) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    if (data.notes[id] === undefined) {
      throw new ClientError(404, `cannot find note with id ${id}`);
    }
    res.json(data.notes[id]);
  } catch (err) {
    next(err);
  }
});

app.post('/api/notes', async (req, res,next) => {
  try {
    const { content } = req.body;
    if (content === undefined) {
      throw new ClientError(400, 'content is a required field');
    }
    const data = await readData();
    const note = {
      id: data.nextId,
      content,
    };
    data.notes[note.id] = note;
    data.nextId++;
    await writeData(data);
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/notes/:id', async (req, res,next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    const data = await readData();
    if (data.notes[id] === undefined) {
      throw new ClientError(404, `cannot find note with id ${id}`);
    }
    delete data.notes[id];
    await writeData(data);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.put('/api/notes/:id', async (req, res,next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    const { content } = req.body;
    if (content === undefined) {
      throw new ClientError(400, 'content is a required field');
    }
    const data = await readData();
    if (data.notes[id] === undefined) {
      throw new ClientError(404, `cannot find note with id ${id}`);
    }
    const note = {
      id,
      content,
    };
    data.notes[note.id] = note;
    await writeData(data);
    res.json(note);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log(`express server listening on port 8080`);
});
