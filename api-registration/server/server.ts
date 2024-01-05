/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type User = {
  username: string;
  password: string;
};
type Entry = {
  entryId: number;
  title: string;
  notes: string;
  photoUrl: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body as Partial<User>;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    /* TODO:
     * Hash the user's password with `argon2.hash()`
     * Insert the user's "username" and "hashedPassword" into the "users" table.
     * Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
     * Catch any errors.
     *
     * Hint: Insert statements can include a `returning` clause to retrieve the insterted row(s).
     */

    type Response = {
      username: string;
      hashedPassword: string;
      createdAt: string;
      userId: number;
    }

    const hashedPassword = await argon2.hash(password);

    const sql =`
      insert into "users" ("username", "hashedPassword")
        values($1, $2)
        returning *
    `;
    const params = [username, hashedPassword];
    const result = await db.query<Response>(sql, params);

    const [user] = result.rows;
    const {hashedPassword: _, ...output} = user;


    res.status(201).json(output);

  } catch (err) {
    next(err);
  }
});

app.get('/api/entries', async (req, res, next) => {
  try {
    const sql = `
      select * from "entries" order by "entryId" desc;
    `;
    const result = await db.query<Entry>(sql);
    res.status(201).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/entries', async (req, res, next) => {
  try {
    const { title, notes, photoUrl } = req.body as Partial<Entry>;
    if (!title || !notes || !photoUrl) {
      throw new ClientError(
        400,
        'title, notes, and photoUrl are required fields'
      );
    }
    const sql = `
      insert into "entries" ("title", "notes", "photoUrl")
        values ($1, $2, $3)
        returning *;
    `;
    const params = [title, notes, photoUrl];
    const result = await db.query<Entry>(sql, params);
    const [entry] = result.rows;
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
});

app.put('/api/entries/:entryId', async (req, res, next) => {
  try {
    const entryId = Number(req.params.entryId);
    const { title, notes, photoUrl } = req.body as Partial<Entry>;
    if (!Number.isInteger(entryId) || !title || !notes || !photoUrl) {
      throw new ClientError(
        400,
        'entryId, title, notes, and photoUrl are required fields'
      );
    }
    const sql = `
      update "entries"
        set "title" = $1,
            "notes" = $2,
            "photoUrl" = $3
        where "entryId" = $4
        returning *;
    `;
    const params = [title, notes, photoUrl, entryId];
    const result = await db.query<Entry>(sql, params);
    const [entry] = result.rows;
    if (!entry) {
      throw new ClientError(404, `Entry with id ${entryId} not found`);
    }
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/entries/:entryId', async (req, res, next) => {
  try {
    const entryId = Number(req.params.entryId);
    if (!Number.isInteger(entryId)) {
      throw new ClientError(400, 'entryId must be an integer');
    }
    const sql = `
      delete from "entries"
        where "entryId" = $1
        returning *;
    `;
    const params = [entryId];
    const result = await db.query<Entry>(sql, params);
    const [deleted] = result.rows;
    if (!deleted) {
      throw new ClientError(404, `Entry with id ${entryId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
