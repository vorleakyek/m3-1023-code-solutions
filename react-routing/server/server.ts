import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError } from './lib/client-error.js';
import { errorMiddleware } from './lib/error-middleware.js';

type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
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

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select "productId",
            "name",
            "price",
            "imageUrl",
            "shortDescription"
        from "products"
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    const sql = `
      select "productId",
            "name",
            "price",
            "imageUrl",
            "shortDescription",
            "longDescription"
        from "products"
        where "productId" = $1
    `;
    const params = [productId];
    const result = await db.query<Product>(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(
        404,
        `cannot find product with productId ${productId}`
      );
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
