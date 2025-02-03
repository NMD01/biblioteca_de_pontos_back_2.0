import { AppError } from '@/Common/Domain/Errors/app-error'
import { NextFunction, Request, Response } from 'express'

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message })
  }

  console.log(err)

  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error!' })
}
