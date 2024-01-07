/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me! */
import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ClientError, errorMiddleware, authMiddleware } from './lib/index.js';

type User = {
  userId: number;
  username: string;
  hashedPassword: string;
};
type Auth = {
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

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body as Partial<Auth>;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning *
    `;
    const params = [username, hashedPassword];
    const result = await db.query<User>(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body as Partial<Auth>;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }
    const sql = `
    select "userId",
           "hashedPassword"
      from "users"
     where "username" = $1
  `;
    const params = [username];
    const result = await db.query<User>(sql, params);
    const [user] = result.rows;
    if (!user) {
      throw new ClientError(401, 'invalid login');
    }
    const { userId, hashedPassword } = user;
    if (!(await argon2.verify(hashedPassword, password))) {
      throw new ClientError(401, 'invalid login');
    }
    const payload = { userId, username };
    const token = jwt.sign(payload, hashKey);
    res.json({ token, user: payload });
  } catch (err) {
    next(err);
  }
});

app.get('/api/entries', authMiddleware, async (req, res, next) => {
  try {
    // if (!req.user) {
    //   throw new ClientError(401, 'not logged in');
    // }
    const sql = `
      select * from "entries"
        where "userId" = $1
        order by "entryId" desc;
    `;
    const result = await db.query<User>(sql, [req.user?.userId]);
    res.status(201).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/entries', authMiddleware, async (req, res, next) => {
  try {
    // if (!req.user) {
    //   throw new ClientError(401, 'not logged in');
    // }
    const { title, notes, photoUrl } = req.body as Partial<Entry>;
    if (!title || !notes || !photoUrl) {
      throw new ClientError(
        400,
        'title, notes, and photoUrl are required fields'
      );
    }
    const sql = `
      insert into "entries" ("userId", "title", "notes", "photoUrl")
        values ($1, $2, $3, $4)
        returning *;
    `;
    const params = [req.user?.userId, title, notes, photoUrl];
    const result = await db.query<Entry>(sql, params);
    const [entry] = result.rows;
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
});

app.put('/api/entries/:entryId', async (req, res, next) => {
  try {
    if (!req.user) {
      throw new ClientError(401, 'not logged in');
    }
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
        where "entryId" = $4 and "userId" = $5
        returning *;
    `;
    const params = [title, notes, photoUrl, entryId, req.user?.userId];
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
    if (!req.user) {
      throw new ClientError(401, 'not logged in');
    }
    const entryId = Number(req.params.entryId);
    if (!Number.isInteger(entryId)) {
      throw new ClientError(400, 'entryId must be an integer');
    }
    const sql = `
      delete from "entries"
        where "entryId" = $1 and "userId" = $2
        returning *;
    `;
    const params = [entryId, req.user?.userId];
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
