import {NextFunction, Request, Response} from 'express';
import { ClientCustomError } from './client-error.js';

export function customErrorMiddleware(
  err: unknown,
  req:Request,
  res:Response,
  next:NextFunction
) {

  if(err instanceof ClientCustomError) {
    res.status(err.status).json({error:err.message});
  } else {
    console.log(err);
    res.status(500).json({error: 'an unexpected error occurred'});
  }

}
