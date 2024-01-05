import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ClientError, errorMiddleware } from './lib/index.js';

type User = {
  userId: number;
  username: string;
  hashedPassword: string;
};
type Entry = {
  entryId: number;
  title: string;
  notes: string;
  photoUrl: string;
};
type Auth = {
  username: string;
  password: string;
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

    /* your code starts here */

    /* Query the database to find the "userId" and "hashedPassword" for the "username".
     * If no user is found,
     *   throw a 401: 'invalid login' error.
     * If a user is found,
     *   confirm that the password included in the request body matches the "hashedPassword" with `argon2.verify()`
     *   If the password does not match,
     *     throw a 401: 'invalid login' error.
     *   If the password does match,
     *     Create a payload object containing the user's "userId" and "username".
     *     Create a new signed token with `jwt.sign()`, using the payload and your TOKEN_SECRET
     *     (see `hashKey` above).
     *     Send the client a 200 response containing the payload and the token.
     */

    const sql = `
      select "userId",
             "hashedPassword"
      from "users"
      where "username" = $1;
    `;

    const params = [username];
    const result = await db.query<User>(sql, params);
    const [userIdAndHashedpw] = result.rows;

    if (!userIdAndHashedpw) {
      throw new ClientError(401, 'invalid login');
    }

    const isMatching = await argon2.verify(
      userIdAndHashedpw.hashedPassword,
      password
    );

    if (!isMatching) {
      throw new ClientError(401, 'invalid login');
    }

    const user = {
      userId: userIdAndHashedpw.userId,
      username: username
    };
    const secretKey = process.env.TOKEN_SECRET;

    if (!secretKey) {
      throw new Error('TOKEN_SECRET not found in .env');
    }

    const token = jwt.sign(user, secretKey);
    res.status(200).json({user,token});

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
