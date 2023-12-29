import { Response } from 'express'

export const errorFormattedResponse = (
  res: Response,
  status: number,
  errorMsg: string,
  details: string | null = null,
  trailString: string | null = null,
) => {
  res.status(status).json({
    timestamp: new Date().toISOString(),
    status: status,
    error: errorMsg,
    details: details,
    path: res.req.url,
    trailStack: trailString,
  })
}
