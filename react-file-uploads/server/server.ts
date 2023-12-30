import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import {
  ClientError,
  errorMiddleware,
  uploadsMiddleware,
} from './lib/index.js';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post(
  '/api/uploads',
  uploadsMiddleware.single('image'),
  async (req, res, next) => {
    try {
      if (!req.file) throw new ClientError(400, 'no file field in request');
      const { caption } = req.body as Partial<Image>;
      if (!caption) {
        throw new ClientError(400, 'caption is a required field');
      }
      /* TODO:
       * - create a url for the image by combining '/images/' with req.file.filename
       * - insert the "caption" and "url" into the "images" table
       * - respond with the inserted row data and the proper status code for inserting data
       */

      const {filename} = req.file;
      const url = '/images/' + filename;

      const sql = `
        insert into "images" ("caption", "url")
        values($1, $2)
        returning *
      `;
      const params = [caption,url];
      const result = await db.query<Image>(sql,params);

      if(!result) {
        throw new ClientError(404, 'cannot find the new inserted file.');
      }
      res.status(201).json(result.rows[0]);
    } catch (err) {
      next(err);
    }
  }
);

app.get('/api/images', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "images"
    `;
    const result = await db.query<Image>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
