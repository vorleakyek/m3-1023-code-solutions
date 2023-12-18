/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  /* your code here */
  const {authorization} = req.headers;
  const token = authorization?.split('Bearer ')[1];

  if(!authorization || !token) {
    throw new ClientError(401, 'authentication required');
  }

  const secretKey = process.env.TOKEN_SECRET;

  if (!secretKey) {
    throw new ClientError(401, 'Token secret is not found in .env')
  }

  const payload = jwt.verify(token, secretKey);
  req.user = payload as Request['user'];
  next();
}

/*
 * Get the 'Authorization' header from the request.
 * Parse the token from the header; e.g., auth.split('Bearer ')[1]
 * Note: the space after `Bearer` is important.
 * If no header or no token is provided,
 *   throw a 401 error with the message 'authentication required'
 * Use jwt.verify() to verify the authenticity of the token and extract its payload.
 * Note: You need the TOKEN_SECRET. You can look at the `hashKey` code in server.ts if needed.
 * Assign the extracted payload to the user property of the req object.
 * Note: The TypeScript for this assignment is best written with a type assertion:
 *   req.user = payload as Request['user'];
 * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
 *
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
