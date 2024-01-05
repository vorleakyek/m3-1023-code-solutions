import 'dotenv/config';
import jwt from 'jsonwebtoken';

const secret = process.env.TOKEN_SECRET;
if (!secret) throw new Error('TOKEN_SECRET not found');

const payload = {
  userId: 42,
  permissions: ['drink', 'drive'],
};

const token = jwt.sign(payload, secret);

console.log(token);
