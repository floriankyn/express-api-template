import jsonWebToken, { VerifyErrors } from 'jsonwebtoken'
import { Response, NextFunction } from 'express'
import { errorFormattedResponse } from '../utils/error'
import { AuthenticatedRequest } from '../types/controllers'

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Response | void => {
  const token = extractToken(req.headers.authorization)
  const secret = process.env.MASTER_TOKEN_SECRET

  if (!token) {
    return res.sendStatus(401)
  }

  if (!secret) {
    console.error('MASTER_TOKEN_SECRET is not set.')
    return res.status(500).send('Internal Server Error')
  }

  jsonWebToken.verify(token, secret, (err: VerifyErrors | null, decoded) => {
    if (err) {
      return res.sendStatus(403)
    }
    req.token = decoded
    next()
  })
}

export const authenticateMasterToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Response | void => {
  const authHeader = req.headers['x-auth-token']
  const secret = process.env.MASTER_TOKEN_SECRET

  if (!secret) {
    console.error('MASTER_TOKEN_SECRET is not set.')
    return res
      .status(500)
      .send('Internal Server Error | MASTER_TOKEN_SECRET is not set.')
  }

  if (!authHeader) {
    return errorFormattedResponse(
      res,
      403,
      'No token provided.',
      'x-auth-token header is missing.',
    )
  }

  if (typeof authHeader !== 'string') {
    return errorFormattedResponse(
      res,
      403,
      'Invalid token.',
      'x-auth-token header is invalid.',
    )
  }

  if (!validateMasterToken(authHeader, secret)) {
    return errorFormattedResponse(
      res,
      403,
      'Invalid token.',
      'x-auth-token header is invalid.',
    )
  }

  try {
    const token = jsonWebToken.sign({}, secret || '')
    req.token = token
    next()
  } catch (err) {
    console.error(err)
    return res.status(403).json({
      message: 'Error processing the token',
    })
  }
}

function extractToken(authHeader: string | undefined): string | undefined {
  return authHeader?.split(' ')[1]
}

function validateMasterToken(
  authHeader: string | undefined,
  secret: string | undefined,
): boolean {
  return typeof authHeader === 'string' && authHeader === secret
}
