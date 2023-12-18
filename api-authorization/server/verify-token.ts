import 'dotenv/config';
import jwt from 'jsonwebtoken';

const secret = process.env.TOKEN_SECRET;
if (!secret) throw new Error('TOKEN_SECRET not found in env');

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYXV0b2RpZGFjdCIsImlhdCI6MTYwODE1NjM4Nn0.w9mORRpJ6Twlwr1pMdILyNqOyz7Auh8_rzcRUsexvy8';

try {
  const payload = jwt.verify(token, secret);
  console.log(payload);
} catch (err) {
  console.error(err);
}
