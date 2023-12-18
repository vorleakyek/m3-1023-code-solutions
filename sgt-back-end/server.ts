import express, { Request, Response, NextFunction } from 'express';
import pg from 'pg';
import { errorMiddleware } from './error-middleware.js';
import { ClientError } from './client-error.js';
import { nextTick } from 'process';

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    // Ok, the input is reasonable, time to query the database.
    // We are NOT putting the user input directly into our query;
    // instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    // If we get here, the query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows[0];
    if (!grade) {
      // We could not have known ahead of time without actually querying the db,
      // but the specific grade being requested was not found in the database.
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    // The specific grade was found in the database, yay! Return it.
    res.json(grade);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

app.get(
  '/api/grades',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sql = `
      select *
        from "grades"
    `;
      const result = await db.query(sql);
      const allGrade = result.rows;
      if (!allGrade) {
        throw new ClientError(404, `Cannot find any grade record`);
      }
      res.json(allGrade);
    } catch (err) {
      next(err);
    }
  }
);

app.post(
  '/api/grades',
  async (req: Request, res: Response, next: NextFunction) => {

    try {
      const {course, name, score: rawScore} = req.body;
      const score = Number(rawScore);

      if (!course || !name || ((!score) && (score!==0))) {
        throw new ClientError(400, 'course, name, or score is missing');
      }

      if (!Number.isInteger(score) || score < 0 || score > 100) {
        throw new ClientError(400, 'score should be an integer from 0 to 100');
      }

      const sql = `
      insert into "grades" ("name","course","score")
      values ($1, $2, $3)
      returning *
    `;

      const values = [name, course, score];

      const result = await db.query(sql, values);
      const newGrade = result.rows[0];

      if (!newGrade) {
        throw new ClientError(404, `Cannot find the new inserted grade record`);
      }

      res.status(201).json(newGrade);
    } catch (err) {
      next(err);
    }
  }
);

app.put(
  '/api/grades/:gradeId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const gradeId = Number(req.params.gradeId);
      const {course, name, score: rawScore } = req.body;
      const score = Number(rawScore);

      if (!Number.isInteger(gradeId) || gradeId <= 0) {
        throw new ClientError(400, 'gradeId must be a positive integer');
      }

      if (!course || !name || (!score && score !== 0)) {
        throw new ClientError(400, 'course, name, or score is missing');
      }

      if (!Number.isInteger(score) || score < 0 || score > 100) {
        throw new ClientError(400, 'score should be an integer from 0 to 100');
      }

      const sql = `
      update "grades"
        set "course" = $1,
            "name" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *
    `;

      const values = [course, name, score, gradeId];

      const result = await db.query(sql, values);
      const updatedGrade = result.rows[0];

      if (!updatedGrade) {
        throw new ClientError(
          404,
          `Cannot find grade with gradeId ${gradeId}`
        );
      }

      res.status(200).json(updatedGrade);
    } catch (err) {
      next(err);
    }
  }
);

app.delete(
  '/api/grades/:gradeId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const gradeId = Number(req.params.gradeId);

      if (!Number.isInteger(gradeId) || gradeId <= 0) {
        throw new ClientError(400, 'gradeId must be a positive integer');
      }

      const sql = `
        delete
          from "grades"
          where "gradeId" = $1
          returning *
      `;

      const values = [gradeId];

      const result = await db.query(sql, values);
      const deletedGrade = result.rows[0];

      if (!deletedGrade) {
        throw new ClientError(404, `Cannot find gradeId ${gradeId}`);
      }

      res.sendStatus(204);

    } catch (err) {
      next(err);
    }
  }
);

app.use(errorMiddleware);

app.listen(8000, () => {
  console.log('Listening on port 8000.');
});
